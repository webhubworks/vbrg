# Craft 4 Boilerplate with Vite, Tailwind & (optionally) Vue

## Requirements
To use this starter template, you need to have installed:
- DDEV 1.19.0+
- Composer 2+
- PHP 8+
- git

## Installation
### 1. Create a new project directory and install Craft CMS
```bash
mkdir my-project && cd $_
composer create-project craftcms/craft .
# Are you ready to begin the setup? -> no
mv web public
```

### 2. Init as git repository and copy boilerplate files
```bash
git init && git add . && git commit -m "A new project has been born"
git remote add boilerplate git@github.com:webhubworks/craft4-vite-boilerplate.git
git fetch boilerplate
git merge boilerplate/main -X theirs --allow-unrelated-histories -m "Install boilerplate files"
git remote remove boilerplate
```

### 3. Setup DDEV
```bash
ddev config --php-version="8.1" --docroot="public" --database="mysql:8.0" # --mutagen-enabled=true
ddev composer config platform.php 8.1
ddev start
```

### 4. Configure autoload of boilerplate module
```
// composer.json
{
    // …
    "autoload": {
        "psr-4": {
            "sitemodule\\": "modules/sitemodule/src"
        }
    },
}
```
```bash
ddev composer dump-autoload -a
```

### 5. Install Craft & Plugins
```bash
ddev describe
ddev craft setup # Confirm everything including 'Install Craft now?' then start customizing at 'Username: [admin]'

git add . && git commit -m "Install Craft CMS"

ddev composer require --dev spatie/craft-ray craftcms/generator
ddev composer require nystudio107/craft-vite craftcms/redactor # ether/seo is currently in abandoned state
ddev craft plugin/install vite && ddev craft plugin/install redactor
```

> **Note**
> If you get the following prompt, make sure to answer `y`:
>
> ```sh
> yiisoft/yii2-composer contains a Composer plugin which is currently not in your allow-plugins config. See https://getcomposer.org/allow-plugins
> Do you trust "yiisoft/yii2-composer" to execute code and wish to enable it now? (writes "allow-plugins" to composer.json)
> ```

### 6. Freeze Node version and install Node components
```bash
ddev nvm install lts/*
node -v > .nvmrc
git add . && git commit -m "Freeze Node version 🥶"
ddev npm install
```

## Usage
```bash
ddev nvm i && ddev npm run dev
```

### CriticalCSS
>Under the hood (and down the dependency tree!), the Critical plugin relies on Puppeteer, which will not be able to launch the bundled chromium binary from within the web container because of some missing Linux libraries.

To run Puppeteer within DDEV, there's a workaround included in `.ddev/config.yaml` and `.ddev/config.m1.yaml` (for Apple M1 chips). Based on [this guide](https://github.com/onedarnleyroad/craftcms/wiki/Generating-Critical-CSS).

Upon build, the critical CSS is generated for the homepage. To generate it for other pages, you need to add the following to the `vite.config.js` file:

```js
// vite.config.js
criticalPages: [
    { uri: '', template: 'index' },
    { uri: 'about', template: 'about/index' },      // templates/about/index.twig
    { uri: 'contact', template: 'contact/index' },  // templates/contact/index.twig
]
```

Before deploying, you need to install required Debian packages on the server (based on [spatie.be](https://spatie.be/docs/browsershot/v2/requirements#content-installing-puppeteer-a-forge-provisioned-server)). You can do this by running the following command on the server (for Ubuntu 20.04):

```bash
sudo apt-get install gconf-service libasound2 libatk1.0-0 libgbm1 libgcc1 libgcc1 libgconf-2-4 libgtk-3-0 libx11-xcb1 libxcomposite1 libxcursor1 libxdamage1 libxfixes3 libxi6 libxrandr2 libxss1 libxtst6 fonts-liberation libappindicator1 xdg-utils libgbm-dev libxshmfence-dev
```

Alternatively, you can run the Forge recipe 'Install Puppeteer dependencies'.

## Craft Generator Usage

You can refer to the [Craft Generator documentation](https://github.com/craftcms/generator/blob/51e52685a1f3655b5b70eec6564b22f6e56dbf8a/README.md) to see all available options.
Run the following command to output the usage instructions:

```sh
php craft make
```

### Plugin and module generation

You can create new plugins and modules using the following commands:

```sh
php craft make plugin
php craft make module
```

### System component generation

You can create new system components using the following commands:

```sh
php craft make asset-bundle
php craft make command
php craft make controller
php craft make element-action
php craft make element-condition-rule
php craft make element-exporter
php craft make element-type
php craft make field-type
php craft make filesystem-type
php craft make generator
php craft make model
php craft make module
php craft make plugin
php craft make queue-job
php craft make record
php craft make service
php craft make utility
php craft make validator
php craft make widget-type
```

All component generation commands require one of the following options to be passed, which identify where the component is going to live:

- `--app`
- `--module=<module-id>`
- `--plugin=<plugin-handle>`

For example, if you’re creating a new field type for a plugin called `foo-bar`, you would run:

```sh
php craft make field-type --plugin=foo-bar
```
