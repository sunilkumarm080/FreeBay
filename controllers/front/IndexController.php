<?php
/**
 * 2007-2016 PrestaShop
 *
 * thirty bees is an extension to the PrestaShop e-commerce software developed by PrestaShop SA
 * Copyright (C) 2017 thirty bees
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0)
 * that is bundled with this package in the file LICENSE.txt.
 * It is also available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 * If you did not receive a copy of the license and are unable to
 * obtain it through the world-wide-web, please send an email
 * to license@thirtybees.com so we can send you a copy immediately.
 *
 * DISCLAIMER
 *
 * Do not edit or add to this file if you wish to upgrade PrestaShop to newer
 * versions in the future. If you wish to customize PrestaShop for your
 * needs please refer to https://www.thirtybees.com for more information.
 *
 * @author    thirty bees <contact@thirtybees.com>
 * @author    PrestaShop SA <contact@prestashop.com>
 * @copyright 2017 thirty bees
 * @copyright 2007-2016 PrestaShop SA
 * @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 *  PrestaShop is an internationally registered trademark & property of PrestaShop SA
 */

/**
 * Class IndexControllerCore
 *
 * @since 1.0.0
 */
class IndexControllerCore extends FrontController
{
    // @codingStandardsIgnoreStart
    /** @var string $php_self */
    public $php_self = 'index';
    // @codingStandardsIgnoreEnd

    /**
     * Initialize content
     *
     * @return void
     *
     * @since 1.0.0
     */
    public function initContent()
    {
        parent::initContent();
        $this->addJS(_THEME_JS_DIR_.'index.js');

        $this->context->smarty->assign(
            [
                'HOOK_HOME'             => Hook::exec('displayHome'),
                'HOOK_HOME_TAB'         => Hook::exec('displayHomeTab'),
                'HOOK_HOME_TAB_CONTENT' => Hook::exec('displayHomeTabContent'),
            ]
        );
        $this->setTemplate(_PS_THEME_DIR_.'index.tpl');
    }
}
