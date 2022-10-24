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

