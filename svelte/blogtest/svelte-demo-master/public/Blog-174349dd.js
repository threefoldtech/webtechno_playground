import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, t as text, a as space, b as attr, c as add_location, d as insert, f as append, n as noop, g as detach, q as listen, r as destroy_each, u as run_all } from './chunk-4d16c660.js';

/* src/routes/Blog.svelte generated by Svelte v3.6.7 */

const file = "src/routes/Blog.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.post = list[i];
	return child_ctx;
}

// (55:2) {#each posts as post}
function create_each_block(ctx) {
	var a, t0_value = ctx.post.title, t0, a_href_value, t1, br0, t2, t3_value = ctx.post.body, t3, t4, br1, t5, br2;

	return {
		c: function create() {
			a = element("a");
			t0 = text(t0_value);
			t1 = space();
			br0 = element("br");
			t2 = space();
			t3 = text(t3_value);
			t4 = space();
			br1 = element("br");
			t5 = space();
			br2 = element("br");
			attr(a, "href", a_href_value = "/blog/" + ctx.post.id);
			add_location(a, file, 55, 6, 1092);
			add_location(br0, file, 56, 3, 1138);
			add_location(br1, file, 58, 1, 1159);
			add_location(br2, file, 59, 1, 1165);
		},

		m: function mount(target, anchor) {
			insert(target, a, anchor);
			append(a, t0);
			insert(target, t1, anchor);
			insert(target, br0, anchor);
			insert(target, t2, anchor);
			insert(target, t3, anchor);
			insert(target, t4, anchor);
			insert(target, br1, anchor);
			insert(target, t5, anchor);
			insert(target, br2, anchor);
		},

		p: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(a);
				detach(t1);
				detach(br0);
				detach(t2);
				detach(t3);
				detach(t4);
				detach(br1);
				detach(t5);
				detach(br2);
			}
		}
	};
}

function create_fragment(ctx) {
	var t0, input0, t1, br0, t2, input1, t3, h1, t5, br1, t6, div, dispose;

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
			br0 = element("br");
			t2 = space();
			input1 = element("input");
			t3 = space();
			h1 = element("h1");
			h1.textContent = "Recent posts";
			t5 = space();
			br1 = element("br");
			t6 = space();
			div = element("div");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			document.title = "Blog";
			attr(input0, "class", "blog-title svelte-12qfjnz");
			add_location(input0, file, 47, 0, 884);
			add_location(br0, file, 48, 0, 941);
			attr(input1, "class", "blog-description svelte-12qfjnz");
			add_location(input1, file, 49, 0, 948);
			add_location(h1, file, 50, 0, 1017);
			add_location(br1, file, 51, 0, 1039);
			attr(div, "id", "posts");
			add_location(div, file, 53, 0, 1045);

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
			insert(target, br0, anchor);
			insert(target, t2, anchor);
			insert(target, input1, anchor);

			input1.value = blogInfo.description;

			insert(target, t3, anchor);
			insert(target, h1, anchor);
			insert(target, t5, anchor);
			insert(target, br1, anchor);
			insert(target, t6, anchor);
			insert(target, div, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
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
						each_blocks[i].m(div, null);
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
				detach(br0);
				detach(t2);
				detach(input1);
				detach(t3);
				detach(h1);
				detach(t5);
				detach(br1);
				detach(t6);
				detach(div);
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
  window.gun.get("headline").on(headLine => {
    blogInfo.title = headLine.title;
    blogInfo.description = headLine.description;
  });
  posts = [];
  window.gun
    .get("posts")
    .map()
    .on(post => {
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
//# sourceMappingURL=Blog-174349dd.js.map
