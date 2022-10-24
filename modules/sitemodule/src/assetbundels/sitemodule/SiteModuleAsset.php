<?php
/**
 * laravel-mix module for Craft CMS 3.x
 *
 * Provides a mix() Twig filter to use in templates for getting versioned asset files from the mix-manifest.json.
 *
 * @link      https://rostock-ahoi.de
 * @copyright Copyright (c) 2018 Johannes Ahrndt
 */

namespace sitemodule\assetbundles\sitemodule;

use Craft;
use craft\web\AssetBundle;
use craft\web\assets\cp\CpAsset;

class SiteModuleAsset extends AssetBundle
{
    // Public Methods
    // =========================================================================

    /**
     * Initializes the bundle.
     */
    public function init()
    {
        // define the path that your publishable resources live
        $this->sourcePath = "@modules/sitemodule/assetbundles/sitemodule/dist";

        // define the dependencies
        $this->depends = [
            CpAsset::class,
        ];

        // define the relative path to CSS/JS files that should be registered with the page
        // when this asset bundle is registered
        $this->js = [
            'js/SiteModule.js',
        ];

        $this->css = [
            'css/SiteModule.css',
        ];

        parent::init();
    }
}
