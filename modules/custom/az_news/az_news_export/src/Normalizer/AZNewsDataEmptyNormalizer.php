<?php

namespace Drupal\az_news_export\Normalizer;

use Drupal\serialization\Normalizer\NormalizerBase;
use Drupal\az_news_export\AZNewsDataEmpty;

/**
 * Normalizes AZNewsDataEmpty objects into an empty object.
 */
class AZNewsDataEmptyNormalizer extends NormalizerBase {

  /**
   * {@inheritdoc}
   */
  protected $supportedInterfaceOrClass = AZNewsDataEmpty::class;

  /**
   * {@inheritdoc}
   */
  public function normalize($object, $format = NULL, array $context = []): array|string|int|float|bool|\ArrayObject|NULL {
    return new \ArrayObject();
  }

}
