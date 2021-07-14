<?php

namespace Drupal\Tests\az_metrics\Functional;

use Drupal\Tests\BrowserTestBase;

/**
 * Test to ensure the metrics module runs the cron function successfully.
 *
 * @group az_metrics
 */
class MetricsCronTest extends BrowserTestBase {

  /**
   * The profile to install as a basis for testing.
   *
   * @var string
   */
  protected $profile = 'az_quickstart';

  /**
   * @var bool
   */
  protected $strictConfigSchema = FALSE;

  /**
   * @var string
   */
  protected $defaultTheme = 'seven';

  /**
   * Modules to enable.
   *
   * @var array
   */
  protected static $modules = [
    'az_metrics',
    'az_core',
  ];

  /**
   * Main test function.
   */
  public function testCronFunc() {

    $user = $this->drupalCreateUser(['administer quickstart configuration']);

    $this->drupalLogin($user);

    $assert = $this->assertSession();

    // Making sure az_metrics_cron() executes without error.
    try {
      az_metrics_cron();
      assert(TRUE);
    }
    catch (Exception $e) {
      echo 'Caught exception: ', $e->getMessage(), "\n";
      assert(FALSE);
    }
  }

}
