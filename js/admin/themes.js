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
 *  @author    thirty bees <contact@thirtybees.com>
 *  @author    PrestaShop SA <contact@prestashop.com>
 *  @copyright 2017 thirty bees
 *  @copyright 2007-2016 PrestaShop SA
 *  @license   http://opensource.org/licenses/osl-3.0.php  Open Software License (OSL 3.0)
 *  PrestaShop is an internationally registered trademark & property of PrestaShop SA
 */

/* global jQuery, $, window, showSuccessMessage, showErrorMessage */

function toggleShopModuleCheckbox(idShop, toggle) {
  var formGroup = $("[for='to_disable_shop" + idShop + "']").parent();
  if (toggle === true) {
    formGroup.removeClass('hide');
    formGroup.find('input').each(function () {
      $(this).prop('checked', 'checked');
    });
  }
  else {
    formGroup.addClass('hide');
    formGroup.find('input').each(function () {
      $(this).prop('checked', '');
    });
  }
}

$(function () {
  $('div.thumbnail-wrapper').hover(
    function () {
      var w = $(this).parent('div').outerWidth(true);
      var h = $(this).parent('div').outerHeight(true);
      $(this).children('.action-wrapper').css('width', w + 'px');
      $(this).children('.action-wrapper').css('height', h + 'px');
      $(this).children('.action-wrapper').show();
    }, function () {
      $('.thumbnail-wrapper .action-wrapper').hide();
    }
  );

  $("[name^='checkBoxShopGroupAsso_theme']").change(function () {
    $(this).parents('.tree-folder').find("[name^='checkBoxShopAsso_theme']").each(function () {
      var id = $(this).attr('value');
      var checked = $(this).prop('checked');
      toggleShopModuleCheckbox(id, checked);
    });
  });
  $("[name^='checkBoxShopAsso_theme']").click(function () {
    var id = $(this).attr('value');
    var checked = $(this).prop('checked');
    toggleShopModuleCheckbox(id, checked);
  });
});
