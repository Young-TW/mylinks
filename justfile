# Use bash with strict mode
set shell := ["bash", "-eu", "-o", "pipefail", "-c"]
set export := true

pm := "pnpm"

# -------------------------------------------------------------------
# Default: list all tasks
# -------------------------------------------------------------------
default:
	@just --list

# -------------------------------------------------------------------
# Setup & Maintenance
# -------------------------------------------------------------------
# Install dependencies
install:
	{{pm}} install

# Bootstrap project: install dependencies and copy env file if needed
bootstrap:
	{{pm}} install
	if [[ -f .env.example && ! -f .env.local ]]; then cp .env.example .env.local; fi

# Update dependencies
update:
	{{pm}} up -i -L

# Clean build artifacts and caches
clean:
	rm -rf node_modules dist .vite .solid .turbo coverage

# Hard clean (remove all untracked files but keep env files)
clean-hard:
	git clean -xfd -e ".env" -e ".env.local"

# -------------------------------------------------------------------
# Dev / Build / Preview
# -------------------------------------------------------------------
# Start development server
dev:
	{{pm}} dev

# Start development server with custom port
dev-port PORT:
	{{pm}} dev -- --port {{PORT}}

# Build project
build:
	{{pm}} build

# Preview built project
preview:
	{{pm}} preview

# -------------------------------------------------------------------
# Quality (typecheck / lint / format / test)
# -------------------------------------------------------------------
# TypeScript type checking
typecheck:
	if {{pm}} run | grep -qE 'typecheck'; then {{pm}} typecheck; else {{pm}} dlx tsc --noEmit; fi

# Lint source code
lint:
	if {{pm}} run | grep -qE 'lint'; then {{pm}} lint; else {{pm}} dlx eslint "src/**/*.{ts,tsx}"; fi

# Lint with auto-fix
lint-fix:
	if {{pm}} run | grep -qE 'lint:fix'; then {{pm}} lint:fix; else {{pm}} dlx eslint "src/**/*.{ts,tsx}" --fix; fi

# Format code
format:
	if {{pm}} run | grep -qE 'format'; then {{pm}} format; else {{pm}} dlx prettier -w .; fi

# Run tests in watch/interactive mode
test:
	{{pm}} test

# Run tests once (CI mode)
test-ci:
	{{pm}} test -- --run

# Run typecheck, lint, tests and build
check: typecheck lint test-ci build
	@echo "✔ All checks passed"

# Default
port := "80"

# Serve command, use --port to set port
serve PORT=port:
    cd dist && exec python3 -m http.server {{PORT}}
