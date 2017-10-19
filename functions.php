<?php 

add_theme_support( 'post-thumbnails' ); 


function additional_custom_styles() {
    /*Enqueue The Styles*/
    wp_enqueue_style( 'madrid', get_template_directory_uri() . '/dist/app.css' );
}

add_action( 'wp_enqueue_scripts', 'additional_custom_styles' );



function add_theme_scripts() {
	wp_enqueue_script( 'script', get_template_directory_uri() . '/dist/app.js', 'javascript', 1.0, true);
}

add_action( 'wp_enqueue_scripts', 'add_theme_scripts' );


?>