<?php
namespace Codifi\AddressType\Plugin\Checkout;

use Magento\Checkout\Block\Checkout\LayoutProcessor;

class LayoutProcessorPlugin
{

    public function afterProcess(LayoutProcessor $subject, array $jsLayout)
    {
        $customAttributeCode = 'customvar';

        $customField = [
            'component' => 'Magento_Ui/js/form/element/select',
            'config' => [
                'customScope' => 'shippingAddress.custom_attributes',
                'customEntry' => null,
                'template' => 'ui/form/field',
                'elementTmpl' => 'ui/form/element/select',
                'id' => 'drop-down',
            ],

            'dataScope' => 'shippingAddress.custom_attributes' . '.' . $customAttributeCode,
            'label' => 'Address Type',
            'provider' => 'checkoutProvider',
            'visible' => true,
            'validation' => ['validate-address' => true],
            'sortOrder' => 150,
            'id' => 'drop-down',
            'options' => [
                [
                    'value' => '',
                    'label' => 'Please, select Address Type.',
                ],
                [
                    'value' => 'Residential',
                    'label' => 'Residential',
                ],
                [
                    'value' => 'Local',
                    'label' => 'Local',
                ]
            ]
        ];

        $jsLayout['components']['checkout']['children']['steps']['children']['shipping-step']['children']['shippingAddress']['children']['shipping-address-fieldset']['children'][$customAttributeCode] = $customField;

        return $jsLayout;
    }
}
