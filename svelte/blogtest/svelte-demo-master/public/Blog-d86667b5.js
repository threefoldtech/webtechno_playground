import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, t as text, a as space, b as attr, c as add_location, d as insert, f as append, n as noop, g as detach, q as listen, r as set_data, u as destroy_each, v as run_all } from './chunk-603a28cc.js';

/* src/routes/Blog.svelte generated by Svelte v3.6.7 */

const file = "src/routes/Blog.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.post = list[i];
	return child_ctx;
}

// (62:2) {#each posts as post}
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
			add_location(a, file, 62, 4, 1323);
			add_location(br0, file, 63, 4, 1370);
			add_location(br1, file, 65, 4, 1398);
			add_location(br2, file, 66, 4, 1409);
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
	var t0, input0, t1, p, t2, t3, t4, br0, t5, input1, t6, br1, t7, br2, t8, br3, t9, div, dispose;

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
			p = element("p");
			t2 = text("Debug: ");
			t3 = text(title);
			t4 = space();
			br0 = element("br");
			t5 = space();
			input1 = element("input");
			t6 = space();
			br1 = element("br");
			t7 = space();
			br2 = element("br");
			t8 = space();
			br3 = element("br");
			t9 = space();
			div = element("div");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}
			document.title = "Blog";
			attr(input0, "class", "blog-title svelte-o63xsf");
			add_location(input0, file, 52, 0, 1097);
			add_location(p, file, 53, 0, 1167);
			add_location(br0, file, 54, 0, 1189);
			attr(input1, "class", "blog-description svelte-o63xsf");
			add_location(input1, file, 55, 0, 1196);
			add_location(br1, file, 56, 0, 1256);
			add_location(br2, file, 57, 0, 1263);
			add_location(br3, file, 58, 0, 1270);
			attr(div, "id", "posts");
			add_location(div, file, 60, 0, 1278);

			dispose = [
				listen(input0, "input", ctx.input0_input_handler),
				listen(input0, "keyup", editBlog),
				listen(input1, "input", ctx.input1_input_handler)
			];
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, input0, anchor);

			input0.value = title;

			insert(target, t1, anchor);
			insert(target, p, anchor);
			append(p, t2);
			append(p, t3);
			insert(target, t4, anchor);
			insert(target, br0, anchor);
			insert(target, t5, anchor);
			insert(target, input1, anchor);

			input1.value = description;

			insert(target, t6, anchor);
			insert(target, br1, anchor);
			insert(target, t7, anchor);
			insert(target, br2, anchor);
			insert(target, t8, anchor);
			insert(target, br3, anchor);
			insert(target, t9, anchor);
			insert(target, div, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}
		},

		p: function update(changed, ctx) {
			if (changed.title && (input0.value !== title)) input0.value = title;

			if (changed.title) {
				set_data(t3, title);
			}

			if (changed.description && (input1.value !== description)) input1.value = description;

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
				detach(p);
				detach(t4);
				detach(br0);
				detach(t5);
				detach(input1);
				detach(t6);
				detach(br1);
				detach(t7);
				detach(br2);
				detach(t8);
				detach(br3);
				detach(t9);
				detach(div);
			}

			destroy_each(each_blocks, detaching);

			run_all(dispose);
		}
	};
}

let posts = [];
let blogInfo = {};
 let title = "";
let description;
function editBlog(e) {
  if (e.key === "Enter") {
	  console.log(blogInfo);
	  window.gun.get("headline").put({title:title, description:description});
  }
}
function preload() {
  // return fetch('https://sapper-template.now.sh/blog.json')
  // return fetch('http://localhost:5000/blog.json')
  // 	.then(r => r.json())
  // 	.then(arr => {
  // 		posts = arr;
  // 	});
  window.gun.get("headline").on(headLine => {
		console.log("old",title, "new headline", headLine.title);
	  $: title = headLine.title;
	  description = headLine.description;
		console.log("new",title);
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
		title = this.value;
		$$invalidate('title', title);
	}

	function input1_input_handler() {
		description = this.value;
		$$invalidate('description', description);
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
//# sourceMappingURL=Blog-d86667b5.js.map
