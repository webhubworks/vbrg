<?php
/**
 * Site module for Craft CMS 3.x
 *
 * Provides a mix() Twig filter to use in templates for getting versioned asset files from the mix-manifest.json.
 *
 * @link      https://rostock-ahoi.de
 * @copyright Copyright (c) 2018 Johannes Ahrndt
 */

namespace sitemodule;

use sitemodule\assetbundles\sitemodule\SiteModuleAsset;

use Craft;
use craft\events\RegisterTemplateRootsEvent;
use craft\events\TemplateEvent;
use craft\i18n\PhpMessageSource;
use craft\web\View;

use yii\base\Event;
use yii\base\InvalidConfigException;
use yii\base\Module;

class SiteModule extends Module
{
    // Static Properties
    // =========================================================================

    /**
     * Static property that is an instance of this module class so that it can be accessed via
     * SiteModule::$instance
     *
     * @var SiteModule
     */
    public static $instance;

    // Public Methods
    // =========================================================================

    /**
     * @inheritdoc
     */
    public function __construct($id, $parent = null, array $config = [])
    {
        Craft::setAlias('@modules/sitemodule', $this->getBasePath());
        $this->controllerNamespace = 'modules\sitemodule\controllers';

        // Translation category
        $i18n = Craft::$app->getI18n();
        /** @noinspection UnSafeIsSetOverArrayInspection */
        if (!isset($i18n->translations[$id]) && !isset($i18n->translations[$id.'*'])) {
            $i18n->translations[$id] = [
                'class' => PhpMessageSource::class,
                'sourceLanguage' => 'en-US',
                'basePath' => '@modules/sitemodule/translations',
                'forceTranslation' => true,
                'allowOverrides' => true,
            ];
        }

        // Base template directory
        Event::on(View::class, View::EVENT_REGISTER_CP_TEMPLATE_ROOTS, function (RegisterTemplateRootsEvent $e) {
            if (is_dir($baseDir = $this->getBasePath().DIRECTORY_SEPARATOR.'templates')) {
                $e->roots[$this->id] = $baseDir;
            }
        });
        // Set this as the global instance of this module class
        static::setInstance($this);

        parent::__construct($id, $parent, $config);
    }

    /**
     * Set our $instance static property to this class so that it can be accessed via
     * SiteModule::$instance
     *
     * Called after the module class is instantiated; do any one-time initialization
     * here such as hooks and events.
     *
     * If you have a '/vendor/autoload.php' file, it will be loaded for you automatically;
     * you do not need to load it in your init() method.
     *
     */
    public function init()
    {
        parent::init();
        self::$instance = $this;

        // Load our AssetBundle
        if (Craft::$app->getRequest()->getIsCpRequest()) {
            $this->_registerAssetBundles();
        }

        Craft::info(
            Craft::t(
                'site-module',
                '{name} module loaded',
                ['name' => 'site-module']
            ),
            __METHOD__
        );
    }

    // Private Methods
    // =========================================================================

    private function _registerAssetBundles()
    {
        Event::on(
            View::class,
            View::EVENT_BEFORE_RENDER_TEMPLATE,
            function (TemplateEvent $event) {
                try {
                    Craft::$app->getView()->registerAssetBundle(SiteModuleAsset::class);
                } catch (InvalidConfigException $e) {
                    Craft::error(
                        'Error registering AssetBundle - '.$e->getMessage(),
                        __METHOD__
                    );
                }
            }
        );
    }
}
