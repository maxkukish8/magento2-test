<?php

namespace Codifi\AdminCustomPage\Model;

use Magento\Framework\Model\AbstractModel;
use Magento\Framework\DataObject\IdentityInterface;

class Post extends AbstractModel implements IdentityInterface
{
    const CACHE_TAG = 'codifi_page_post';

    protected $_cacheTag = 'codifi_page_post';

    protected $_eventPrefix = 'codifi_page_post';

    protected function _construct()
    {
        $this->_init('Codifi\AdminCustomPage\Model\ResourceModel\Post');
    }

    public function getIdentities()
    {
        return [self::CACHE_TAG . '_' . $this->getId()];
    }

    public function getDefaultValues()
    {
        $values = [];

        return $values;
    }
}
