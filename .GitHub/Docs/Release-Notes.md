# Release Notes

A **ChangeLog** is a file that contains a curated, ordered list of notable changes for each versioned release of a project. Its purpose is to make it easier to see precisely what changes have been made between two releases.

## Semantic Versioning

The project follows **Semantic Versioning** (SemVer), which uses the format:

```
MAJOR.MINOR.PATCH
```

- **MAJOR**: Incremented when making incompatible API changes.
- **MINOR**: Incremented when adding functionality in a backward-compatible manner.
- **PATCH**: Incremented when making backward-compatible bug fixes.

### Example

- 1.0.0 → 2.0.0 indicates breaking changes.
- 1.1.0 → 1.2.0 indicates new features without breaking changes.
- 1.0.1 → 1.0.2 indicates bug fixes or minor improvements.

## Format

Each entry in the release notes is organized under the following categories:

- **Features**: New features that have been added.
- **Fixes**: Bugs or issues that have been resolved.
- **Breaking Changes**: Changes that could affect existing functionality or APIs.
- **Improvements**: Enhancements or optimizations made to existing features.
- **Documentation**: Updates or improvements to documentation.
- **Internal**: Changes that do not affect the external API, such as refactoring, tooling updates, or dependency changes.
