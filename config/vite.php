<?php

use craft\helpers\App;

return [
    'checkDevServer' => App::env('CRAFT_ENVIRONMENT') === 'dev',
    'devServerInternal' => 'http://localhost:3000',
    'devServerPublic' => Craft::getAlias('@web') . ':3000',
    'errorEntry' => 'src/scripts/app.js',
    'manifestPath' => Craft::getAlias('@webroot') . '/dist/manifest.json',
    'serverPublic' => Craft::getAlias('@web')  . '/dist/',
    'useDevServer' => App::env('CRAFT_ENVIRONMENT') === 'dev',
    'criticalPath' => Craft::getAlias('@webroot') . '/dist/criticalcss',
    'criticalSuffix' => '_critical.min.css',
];
