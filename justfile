set shell := ["bash", "-cu"]
set windows-shell := ["powershell"]

node_bin := "./node_modules/.bin/"
tsc := node_bin + "tsc"
biome := node_bin + "biome"
tsdown := node_bin + "tsdown"
vitest := node_bin + "vitest"
typedoc := node_bin + "typedoc"

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

# Lint with TypeScript Compiler
tsc:
    cd ./{{fusion}} && ../../{{tsc}} --noEmit
    cd ./{{fusion_node}} && ../../{{tsc}} --noEmit

# Lint code
lint:
    ls-lint
    typos
    just tsc

# Format code
fmt:
    ./{{biome}} check --write .

# Build packages
build:
    cd ./{{fusion}} && ../../{{tsdown}} -c tsdown.config.ts
    cd ./{{fusion_node}} && ../../{{tsdown}} -c tsdown.config.ts
    rm ./{{fusion}}/dist/@types/base/split.js
    rm ./{{fusion}}/dist/@types/base/split.mjs
    rm ./{{fusion}}/dist/@types/base/check.js
    rm ./{{fusion}}/dist/@types/base/check.mjs
    rm ./{{fusion}}/dist/@types/base/merge.js
    rm ./{{fusion}}/dist/@types/base/merge.mjs

# Run tests
test:
    cd ./{{test_fusion}} && ./{{vitest}} run
    cd ./{{test_fusion_node}} && ./{{vitest}} run

# Run tests with different runtimes
test-all:
    cd ./{{test_fusion}} && pnpm run test
    cd ./{{test_fusion_node}} && pnpm run test
    cd ./{{test_fusion}} && deno run test
    cd ./{{test_fusion_node}} && deno run test
    cd ./{{test_fusion}} && bun run test
    cd ./{{test_fusion_node}} && bun run test

# Run client side benchmark
bench-client:
    cd ./{{bench_client}} && ./{{vitest}} bench --run

# Run server side benchmark
bench-server:
    cd ./{{bench_server}} && ./{{vitest}} bench --run

# Run benchmarks
bench:
    just bench-client
    just bench-server

# Generate APIs documentation
api:
    cd ./{{fusion}} && ../../{{typedoc}}
    cd ./{{fusion_node}} && ../../{{typedoc}}

# Publish fusion package as dry-run
publish-dry-fusion:
    cd ./{{fusion}} && pnpm publish --no-git-checks --dry-run

# Publish fusion-node package as dry-run
publish-dry-fusion-node:
    cd ./{{fusion_node}} && pnpm publish --no-git-checks --dry-run

# Publish all packages as dry-run
publish-try:
    just publish-dry-fusion
    just publish-dry-fusion-node

# Publish fusion package
publish-fusion:
    cd ./{{fusion}} && pnpm publish

# Publish fusion-node package
publish-fusion-node:
    cd ./{{fusion_node}} && pnpm publish

# Publish all packages
publish:
    just publish-fusion
    just publish-fusion-node

# Clean builds
clean:
    rm -rf ./{{fusion}}/dist
    rm -rf ./{{fusion_node}}/dist

# Clean media
clean-media:
    rm -rf ./{{bench_server}}/.media
    rm -rf ./{{test_fusion_node}}/.media

# Clean everything
clean-all:
    rm -rf ./node_modules

    rm -rf ./{{fusion}}/node_modules
    rm -rf ./{{fusion_node}}/node_modules

    rm -rf ./{{test_fusion}}/node_modules
    rm -rf ./{{test_fusion_node}}/node_modules

    rm -rf ./{{bench_client}}/node_modules
    rm -rf ./{{bench_server}}/node_modules

    just clean-media

    just clean
