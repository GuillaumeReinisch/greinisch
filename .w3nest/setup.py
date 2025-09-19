# standard library
from json import loads
from pathlib import Path
from shutil import copyfile

# CI
from w3nest.ci.ts_frontend import (
    Bundles,
    Dependencies,
    DevServer,
    MainModule,
    PackageType,
    ProjectConfig,
    RunTimeDeps,
    generate_template,
)

project_folder = Path(__file__).parent.parent

pkg_json = loads((project_folder / "package.json").read_text())

externals_deps = {
    "@w3nest/webpm-client": "^0.1.13",
    "rx-vdom": "^0.1.8",
    "rxjs": "^7.8.2",
}
in_bundle_deps = {}
dev_deps = {}

config = ProjectConfig(
    path=project_folder,
    type=PackageType.APPLICATION,
    name=pkg_json["name"],
    version=pkg_json["version"],
    shortDescription=pkg_json["description"],
    author=pkg_json["author"],
    dependencies=Dependencies(
        runTime=RunTimeDeps(externals=externals_deps, includedInBundle=in_bundle_deps),
        devTime=dev_deps,
    ),
    bundles=Bundles(
        mainModule=MainModule(
            entryFile="./app/main.ts", loadDependencies=list(externals_deps.keys())
        )
    ),
    devServer=DevServer(port=2010),
)

template_folder = project_folder / ".w3nest" / ".template"

generate_template(config=config, dst_folder=template_folder)

files = [
    ".gitignore",
    ".prettierignore",
    ".prettierrc.json",
    "eslint.config.mjs",
    "jest.config.ts",
    "package.json",
    "README.md",
    "rx-vdom.config.ts",
    "tsconfig.json",
    "typedoc.js",
    "webpack.config.ts",
]
for file in files:
    copyfile(src=template_folder / file, dst=project_folder / file)
