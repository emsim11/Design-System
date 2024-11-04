# Prettier Plugins

**Plugins** are ways of adding new languages or formatting rules to Prettier. Prettier's own implementation of all languages are expressed using the plugin API. The core `prettier` package contains JavaScript and other web-focused languages built in. For additional languages, a plugin must be installed.

## Using Plugins

Load plugins with:

The [CLI](https://prettier.io/docs/en/cli) via `--plugin`:

```Bash
prettier --write Main.foo --plugin=prettier-plugin-foo
```

> **Tip:** `--plugin` options can be set multiple times.

The [API](https://prettier.io/docs/en/api) via the `plugins` options:

```TypeScript
await prettier.format('code', {
	parser: 'foo',
	plugins: ['prettier-plugin-foo'],
})
```

The [Configuration File](https://prettier.io/docs/en/configuration):

```JSON
{
	"plugins": ["prettier-plugin-foo"]
}
```

**Note:** Strings provided to plugins are ultimately passed to [`import() expressions`](https://nodejs.org/api/esm.html#import-expressions), so a module/package name, a path, or anything else `import()` takes can be used as the provided string value.

## Official Plugins

- [`@prettier/plugin-php`](https://github.com/prettier/plugin-php)
- [`@prettier/plugin-pug`](https://github.com/prettier/plugin-pug)
- [`@prettier/plugin-ruby`](https://github.com/prettier/plugin-ruby)
- [`@prettier/plugin-xml`](https://github.com/prettier/plugin-xml)
