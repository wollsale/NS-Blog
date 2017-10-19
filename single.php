<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body>
<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

	<header>
		<div class="content">
			<h1><?php the_title(); ?></h1>
			<span class="date"><?php echo get_the_date(); ?></span>
			<ul>
				<?php $tags = get_tags(); ?>
				<?php foreach ($tags as $key => $tag) {
				?>
					<li class="tag">
						<?php echo $tag->name; ?>
					</li>
				<?php
				} ?>

			</ul>
		</div>
	</header>

	<main>
		<div class="post">
			<?php echo the_content(); ?>
		</div>
	</main>

<?php endwhile; ?>
<?php endif; ?>
	
</body>
</html>