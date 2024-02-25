<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package industorious
 */
global $taibasaadh;
?>


<!doctype html>
<html <?php language_attributes(); ?>>
	<head>
		<title>Industrious by TEMPLATED</title>
		<meta charset="<?php bloginfo( 'charset' ); ?>">
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<meta name="description" content="" />
		<meta name="keywords" content="" />
		<link rel="profile" href="https://gmpg.org/xfn/11">
	
	
		
		<?php wp_head(); ?>
	</head>
	<body class="is-preload" <?php body_class(); ?>>

		<!-- Header -->
			<header id="header">
				<a class="logo" href="<?php echo esc_url( home_url( '/' ) ); ?>"><?php echo esc_html($taibasaadh['title']); ?></a>
				<nav>
					<a href="#menu">Menu</a>
				</nav>
			</header>

		<!-- Nav -->
		
				
			<?php
				wp_nav_menu( array(
				'theme_location' => 'menu-1',
				'menu_id'		=> 'menu',
				'menu_class'        => 'links',
			) );
			?>
				
			
		