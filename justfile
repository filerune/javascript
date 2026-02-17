set shell := ["bash", "-cu"]
set windows-shell := ["pwsh", "-Command"]

lsl_cfg := "-config ../../../.ls-lint.yaml"

tsc := "pnpm exec tsc"
biome := "pnpm exec biome"
tsdown := "pnpm exec tsdown"
vitest := "pnpm exec vitest"
typedoc := "pnpm exec typedoc"

publish := "pnpm publish"

fusion := "./packages/fusion/"
fusion_node := "./packages/fusion-node/"

test_fusion := "./tests/fusion/"
test_fusion_node := "./tests/fusion-node/"

bench_client := "./benchmarks/client/"
bench_server := "./benchmarks/server/"

# Default action
_:
    just lint
    just fmt
    just build
    just test

# Install
i:
    pnpm install

# Lint with ls-lint
lslint:
    cd ./{{fusion}}/src && ls-lint {{lsl_cfg}}
    cd ./{{fusion_node}}/src && ls-lint {{lsl_cfg}}

# Lint with TypeScript Compiler
tsc:
    cd ./{{fusion}} && {{tsc}} --noEmit
    cd ./{{fusion_node}} && {{tsc}} --noEmit

# Lint code
lint:
    just lslint
    typos
    just tsc

# Lint code with Biome
lint-biome:
    {{biome}} lint .

# Format code
fmt:
    {{biome}} check --write .

# Build packages
build:
    cd ./{{fusion}} && {{tsdown}} -c tsdown.config.ts
    cd ./{{fusion_node}} && {{tsdown}} -c tsdown.config.ts
    rm ./{{fusion}}/dist/@types/base/split.js
    rm ./{{fusion}}/dist/@types/base/split.mjs
    rm ./{{fusion}}/dist/@types/base/check.js
    rm ./{{fusion}}/dist/@types/base/check.mjs
    rm ./{{fusion}}/dist/@types/base/merge.js
    rm ./{{fusion}}/dist/@types/base/merge.mjs

# Run tests
test:
    cd ./{{test_fusion}} && {{vitest}} run
    cd ./{{test_fusion_node}} && {{vitest}} run

# Run client side benchmark
bench-client:
    cd ./{{bench_client}} && {{vitest}} bench --run

# Run server side benchmark
bench-server:
    cd ./{{bench_server}} && {{vitest}} bench --run

# Run benchmarks
bench:
    just bench-client
    just bench-server

# Generate APIs documentation
api:
    cd ./{{fusion}} && {{typedoc}}
    cd ./{{fusion_node}} && {{typedoc}}

# Publish fusion package as dry-run
publish-dry-fusion:
    cd ./{{fusion}} && {{publish}} --no-git-checks --dry-run

# Publish fusion-node package as dry-run
publish-dry-fusion-node:
    cd ./{{fusion_node}} && {{publish}} --no-git-checks --dry-run

# Publish all packages as dry-run
publish-try:
    just publish-dry-fusion
    just publish-dry-fusion-node

# Publish fusion package
publish-fusion:
    cd ./{{fusion}} && {{publish}}

# Publish fusion-node package
publish-fusion-node:
    cd ./{{fusion_node}} && {{publish}}

# Publish all packages
publish:
    just publish-fusion
    just publish-fusion-node

# Clean media
clean-media:
    rm -rf ./{{bench_server}}/.media
    rm -rf ./{{test_fusion_node}}/.media

# Clean builds
clean:
    rm -rf ./packages/*/dist

# Clean everything
clean-all:
    just clean-media

    just clean

    rm -rf ./benchmarks/*/node_modules

    rm -rf ./tests/*/node_modules

    rm -rf ./packages/*/node_modules

    rm -rf ./node_modules
