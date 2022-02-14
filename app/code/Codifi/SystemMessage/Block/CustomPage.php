<?php

namespace Codifi\SystemMessage\Block;

use Magento\Framework\View\Element\Template;

class CustomPage extends Template
{
    public function getText() {
        return "Page for Success Message";
    }
}

