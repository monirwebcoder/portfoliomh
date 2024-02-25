<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package industorious
 */
global $taibasaadh;
?>

<!-- Footer -->
			<footer id="footer">
				<div class="inner">
					<div class="content">
						<section>
							<h3><?php echo esc_html($taibasaadh['aboutus']); ?></h3>
							<p><?php echo esc_html($taibasaadh['desc']); ?></p>
						</section>
						<section>
							<?php if(is_active_sidebar('footer')){
                                dynamic_sidebar('footer');
                            } ?>
						</section>
						<section>
							<h4>Magna sed ipsum</h4>
							<ul class="plain">
								<li><a href="<?php echo esc_url($taibasaadh['twitter']); ?>"><i class="icon fa-twitter">&nbsp;</i>Twitter</a></li>
								<li><a href="<?php echo esc_url($taibasaadh['facebook']); ?>"><i class="icon fa-facebook">&nbsp;</i>Facebook</a></li>
								<li><a href="<?php echo esc_url($taibasaadh['instagram']); ?>"><i class="icon fa-instagram">&nbsp;</i>Instagram</a></li>
								<li><a href="<?php echo esc_url($taibasaadh['github']); ?>"><i class="icon fa-github">&nbsp;</i>Github</a></li>
							</ul>
						</section>
					</div>
					<div class="copyright">
						<?php echo esc_html($taibasaadh['copyrightmm']); ?>
					</div>
				</div>
			</footer>

		<!-- Scripts -->
			
<?php wp_footer(); ?>
	</body>
</html>