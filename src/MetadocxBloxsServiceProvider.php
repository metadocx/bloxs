<?php

namespace Metadocx\Bloxs;

use Illuminate\Contracts\Support\DeferrableProvider;
use Illuminate\Support\ServiceProvider;

/**
 * Service provider
 * 
 */
class MetadocxBloxsServiceProvider extends ServiceProvider
{
    public function boot()
    {

        $this->publishes([
            // JS
            __DIR__ . '/../dist/metadocx.bloxs.js' => public_path('js/metadocx.bloxs.js'),            
            __DIR__ . '/../dist/metadocx.bloxs.min.js' => public_path('js/metadocx.bloxs.min.js'),    
            __DIR__ . '/../dist/maps/metadocx.bloxs.min.js.map' => public_path('js/maps/metadocx.bloxs.min.js.map'),                    
            // CSS
            __DIR__ . '/../dist/metadocx.bloxs.css' => public_path('css/metadocx.bloxs.css'),
            __DIR__ . '/../dist/metadocx.bloxs.min.css' => public_path('css/metadocx.bloxs.min.css'),
            // Images
            __DIR__ . '/../assets/images/' => public_path('images/metadocx/bloxs/'),            
        ], 'metadocx-bloxs');
    }

}