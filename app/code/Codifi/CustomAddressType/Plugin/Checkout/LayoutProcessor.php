<?php

namespace Codifi\CustomAddressType\Plugin\Checkout;

use Magento\Checkout\Block\Checkout\LayoutProcessor as LayoutProcessorCore;
use Magento\Customer\Model\Session;

class LayoutProcessor
{
    /**
     * @var Session
     */
    protected $session;

    public function __construct(
        Session $session
    ) {
        $this->session = $session;
    }

    /**
     * @param LayoutProcessorCore $subject
     * @param array $jsLayout
     *
     * @return array
     */
    public function afterProcess(
        LayoutProcessorCore $subject,
        array  $jsLayout
    ) {
        $customAttributeCode = 'vip_code';
        $customField = [
            'component' => 'Magento_Ui/js/form/element/abstract',
            'config' => [
                // customScope is used to group elements within a single form (e.g. they can be validated separately)
                'customScope' => 'shippingAddress.custom_attributes',
                'customEntry' => null,
                'template' => 'ui/form/field',
                'elementTmpl' => 'ui/form/element/input',
                'tooltip' => [
                    'description' => 'Vip accounts code. Example: 123123123ASD',
                ],
            ],
            'dataScope' => 'shippingAddress.custom_attributes' . '.' . $customAttributeCode,
            'label' => 'Vip code',
            'provider' => 'checkoutProvider',
            'sortOrder' => 0,
            'validation' => [
                'required-entry' => false
            ],
            'options' => [],
            'filterBy' => null,
            'customEntry' => null,
            'visible' => true,
        ];
        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']
        ['shippingAddress']['children']['shipping-address-fieldset']['children'][$customAttributeCode] = $customField;

        return $jsLayout;
    }
}
