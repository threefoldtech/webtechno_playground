import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, t as text, b as attr, c as add_location, d as insert, f as append, n as noop, g as detach, a as space, q as listen, r as destroy_each, u as run_all } from './chunk-4d16c660.js';

/* src/routes/Blog.svelte generated by Svelte v3.6.7 */

const file = "src/routes/Blog.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.post = list[i];
	return child_ctx;
}

// (10:1) {#each posts as post}
function create_each_block(ctx) {
	var li, a, t_value = ctx.post.title, t, a_href_value;

	return {
		c: function create() {
			li = element("li");
			a = element("a");
			t = text(t_value);
			attr(a, "href", a_href_value = "/blog/" + ctx.post.id);
			add_location(a, file, 10, 6, 186);
			add_location(li, file, 10, 2, 182);
		},

		m: function mount(target, anchor) {
			insert(target, li, anchor);
			append(li, a);
			append(a, t);
		},

		p: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(li);
			}
		}
	};
}

function create_fragment(ctx) {
	var t0, input0, t1, input1, t2, h1, t4, ul, dispose;

	var each_value = posts;

	var each_blocks = [];

	for (var i = 0; i < each_value.length; i += 1) {
		each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
	}

	return {
		c: function create() {
			t0 = space();
			input0 = element("input");
			t1 = space();
			input1 = element("input");
			t2 = space();
			h1 = element("h1");
			h1.textContent = "Recent posts";
			t4 = space();
			ul = element("ul");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			document.title = "Blog";
			add_location(input0, file, 4, 0, 51);
			add_location(input1, file, 5, 0, 87);
			add_location(h1, file, 6, 0, 129);
			attr(ul, "class", "svelte-1frg2tf");
			add_location(ul, file, 8, 0, 152);

			dispose = [
				listen(input0, "input", ctx.input0_input_handler),
				listen(input1, "input", ctx.input1_input_handler)
			];
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, input0, anchor);

			input0.value = blogInfo.title;

			insert(target, t1, anchor);
			insert(target, input1, anchor);

			input1.value = blogInfo.description;

			insert(target, t2, anchor);
			insert(target, h1, anchor);
			insert(target, t4, anchor);
			insert(target, ul, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(ul, null);
			}
		},

		p: function update(changed, ctx) {
			if (changed.blogInfo && (input0.value !== blogInfo.title)) input0.value = blogInfo.title;
			if (changed.blogInfo && (input1.value !== blogInfo.description)) input1.value = blogInfo.description;

			if (changed.posts) {
				each_value = posts;

				for (var i = 0; i < each_value.length; i += 1) {
					const child_ctx = get_each_context(ctx, each_value, i);

					if (each_blocks[i]) {
						each_blocks[i].p(changed, child_ctx);
					} else {
						each_blocks[i] = create_each_block(child_ctx);
						each_blocks[i].c();
						each_blocks[i].m(ul, null);
					}
				}

				for (; i < each_blocks.length; i += 1) {
					each_blocks[i].d(1);
				}
				each_blocks.length = each_value.length;
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(input0);
				detach(t1);
				detach(input1);
				detach(t2);
				detach(h1);
				detach(t4);
				detach(ul);
			}

			destroy_each(each_blocks, detaching);

			run_all(dispose);
		}
	};
}

let posts = [];
let blogInfo = {};

function preload() {
	// return fetch('https://sapper-template.now.sh/blog.json')
	// return fetch('http://localhost:5000/blog.json')
	// 	.then(r => r.json())
	// 	.then(arr => {
	// 		posts = arr;
	// 	});
	posts = [];
	window.gun.get("posts").map().on(post => {
		posts.push(post);
	});
}

function instance($$self, $$props, $$invalidate) {
	function input0_input_handler() {
		blogInfo.title = this.value;
		$$invalidate('blogInfo', blogInfo);
	}

	function input1_input_handler() {
		blogInfo.description = this.value;
		$$invalidate('blogInfo', blogInfo);
	}

	return {
		input0_input_handler,
		input1_input_handler
	};
}

class Blog extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Blog;
export { preload };
//# sourceMappingURL=Blog-1f63498f.js.map
