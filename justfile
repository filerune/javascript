set shell := ["bash", "-cu"]
set windows-shell := ["powershell"]

node_bin := "./node_modules/.bin/"
tsc := node_bin + "tsc"
biome := node_bin + "biome"
tsup := node_bin + "tsup"
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

# Setup the project
setup:
    brew install ls-lint typos-cli
    just i

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
    cd ./{{fusion}} && ../../{{tsup}}
    cd ./{{fusion_node}} && ../../{{tsup}}

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
