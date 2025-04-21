# Git
GIT_REVISION ?= $(shell git rev-parse --short HEAD)
GIT_TAG ?= $(shell git describe --tags --abbrev=0 --always | sed -e s/v//g)

OUTPUT_DIR ?= $(PWD)/cdk8s.out
MANIFEST ?= dev-playground-chart

.PHONY: help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
.DEFAULT_GOAL := help

.PHONY: info
info: ## show information
	@echo "GIT_REVISION: $(GIT_REVISION)"
	@echo "GIT_TAG: $(GIT_TAG)"

.PHONY: install-deps-dev
install-deps-dev: ## install dependencies for development
	@# https://pnpm.io/installation
	@which pnpm || npm install -g pnpm
	@# https://cdk8s.io/docs/latest/cli/installation/
	@which cdk8s || npm install -g cdk8s-cli
	pnpm install
	pnpm run import

.PHONY: fix
fix: ## fix code style
	pnpm run fix:prettier

.PHONY: lint
lint: ## lint
	pnpm run lint:prettier

.PHONY: test
test: ## run tests
	pnpm run test

.PHONY: build
build: ## build applications
	pnpm run build

.PHONY: synth
synth: ## synthesize the given charts
	cdk8s synth --output=cdk8s.out

.PHONY: ci-test
ci-test: install-deps-dev lint build test synth ## run CI test

.PHONY: update
update: ## update dependencies
	pnpm upgrade

.PHONY: deploy
deploy: ## apply the given charts
	kubectl apply -f $(OUTPUT_DIR)/$(MANIFEST).k8s.yaml

.PHONY: destroy
destroy: ## destroy the given stacks
	kubectl delete -f $(OUTPUT_DIR)/$(MANIFEST).k8s.yaml
