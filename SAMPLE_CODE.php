<?php
/**
 * Copyright (c) 2015-present, Facebook, Inc. All rights reserved.
 *
 * You are hereby granted a non-exclusive, worldwide, royalty-free license to
 * use, copy, modify, and distribute this software in source code or binary
 * form for use in connection with the web services and APIs provided by
 * Facebook.
 *
 * As with any software that integrates with the Facebook platform, your use
 * of this software is subject to the Facebook Developer Principles and
 * Policies [http://developers.facebook.com/policy/]. This copyright notice
 * shall be included in all copies or substantial portions of the software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

require '/vendor/autoload.php';

use FacebookAds\Object\AdAccount;
use FacebookAds\Object\AdsInsights;
use FacebookAds\Api;
use FacebookAds\Logger\CurlLogger;

$access_token = 'EAAInXcZAc6ywBAGperqLTuIXX5VV9srfW2RNQ2nhdEN2Gk7ZAij5HEkMsWZC6jvflCMiNz276hYac1YlacLyuHFGgrDEyj74Ar4AjQuyaC5IzRXIgjNw7apnFEP7f5ZCkJQ6bGMaZCafZALD2poOtDVZCZCcKls8vjsmFVjMY2SZBKd5CZCAEthvMJVNwXa9xtgthV3iiPfeq0HgZDZD';
$ad_account_id = 'act_495286908065161';
$app_secret = 'bd9f8635e919e016d214c7bc4e355ac9';
$app_id = '606233666841388';

$api = Api::init($app_id, $app_secret, $access_token);
$api->setLogger(new CurlLogger());

$fields = array(
  'spend',
  'results',
  'quality_score_ecvr',
  'cost_per_action_type:link_click',
  'clicks',
  'unique_clicks',
  'cpc',
  'purchase_roas:omni_purchase',
  'website_purchase_roas:offsite_conversion.fb_pixel_purchase',
  'mobile_app_purchase_roas:app_custom_event.fb_mobile_purchase',
  'account_id',
  'campaign_group_id',
);
$params = array(
  'level' => 'campaign',
  'filtering' => array(array('field' => 'delivery_info','operator' => 'IN','value' => array('active'))),
  'breakdowns' => array('ad_id'),
  'time_range' => array('since' => '2019-12-30','until' => '2020-01-29'),
);
echo json_encode((new AdAccount($ad_account_id))->getInsights(
  $fields,
  $params
)->getResponse()->getContent(), JSON_PRETTY_PRINT);

