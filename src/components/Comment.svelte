<script>
	/**
	 * @description Useful to represent blog or social media comments
	 * @slot {
	 * 	"comment-header": "Define this slot if you want to customize the comment header or remove it entirely. The default slot provides a customizable avatar, the title and a section for meta information about the comment",
	 * 	"comment-meta": "If you are not specifying a default header, fill this slot with the series of HTMLLIElement that contain meta data about the comment",
	 * 	"comment-body": "The body of the comment"
	 * } 
	 * @dispatch {}
	 * @forward {} */

	/**
	 * @description The path to the avatar that will be added to the comment. For optimal results, use a square image. Only specify this property if you are not using a custom header, otherwise it will be ignored
	 * @type {string|undefined} */
	export let avatarSource = undefined;
	/**
	 * @description Change the size of the avatar.
	 * @type {number} */
	export let avatarSize = 80;
	/**
	 * @description The alt property of the avatar image
	 * @type {string} */
	export let avatarAlt = "";
	/**
	 * @description The title of the comment that will be added to the header. It can contain HTML tags. Do not use this property if you are specifying a custom header 
	 * @type {string} */
	export let commentTitleAsHtml = "";
	/**
	 * @description True to add a different style to this comment (e.g. if it's made by the author)
	 * @type {boolean} */
	export let primary = false;
	/** 
	 * @readonly
	 * @description The HTML reference of the component
	 * @type {HTMLElement} */
	export let ref = undefined;
	/** 
	 * @description A string specifying custom style properties for the component
	 * @type {string|undefined} */
	 export let style = undefined;
	/** 
	 * @description A string containing any additional classes to apply to the component
	 * @type {string|undefined} */
	 export let className = undefined;
</script>

<article class={className ? "uk-comment " + className : "uk-comment"} {style} class:uk-comment-primary={primary} bind:this={ref}>
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