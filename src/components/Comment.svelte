<script>
	export let avatarSource = "";
	export let avatarSize = 80;
	export let avatarAlt = "";
	export let commentTitleAsHtml = "";
	export let primary = false;
  export let ref = undefined;
</script>

<article class="uk-comment" class:uk-comment-primary={primary} bind:this={ref}>
	<header class="uk-comment-header">
		<slot name="comment-header">
			<div class="uk-grid-medium uk-flex-middle" uk-grid>
				{#if avatarSource}
					<div class="uk-width-auto">
						<img class="uk-comment-avatar" src={avatarSource} width={avatarSize} height={avatarSize} alt={avatarAlt}>
					</div>
				{/if}
				<div class="uk-width-expand">
					<h4 class="uk-comment-title uk-margin-remove">{@html commentTitleAsHtml}</h4>
						<ul class="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
							<slot name="comment-meta" />
						</ul>
				</div>	
			</div>
		</slot>
	</header>
	<div class="uk-comment-body">
		<slot name="comment-body" />
	</div>
</article>