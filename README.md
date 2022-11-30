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
ddev exec composer dump-autoload -a
```

### 5. Install Craft & Plugins
```bash
ddev describe
ddev craft setup # Confirm everything until 'username'

git add . && git commit -m "Install Craft CMS"

ddev composer require --dev spatie/craft-ray
ddev composer require nystudio107/craft-vite craftcms/redactor ether/seo
ddev craft plugin/install vite && ddev craft plugin/install redactor && ddev craft plugin/install seo  
```

### 6. Install Node components
```bash
ddev npm install
```

## Usage
```bash
ddev npm run dev
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
