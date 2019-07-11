import { S as SvelteComponentDev, i as init, s as safe_not_equal, e as element, t as text, a as space, b as attr, c as add_location, d as insert, f as append, n as noop, g as detach, q as listen, r as prevent_default, u as destroy_each, v as run_all } from './chunk-bf942aba.js';

/* src/routes/Blog.svelte generated by Svelte v3.6.7 */

const file = "src/routes/Blog.svelte";

function get_each_context(ctx, list, i) {
	const child_ctx = Object.create(ctx);
	child_ctx.post = list[i];
	return child_ctx;
}

// (63:2) {#each posts as post}
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
			add_location(a, file, 63, 4, 1253);
			add_location(br0, file, 64, 4, 1300);
			add_location(br1, file, 66, 4, 1328);
			add_location(br2, file, 67, 4, 1339);
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
	var t0, input0, t1, br0, t2, input1, t3, br1, t4, br2, t5, br3, t6, div, t7, form, input2, t8, br4, t9, input3, t10, button, dispose;

	var each_value = ctx.posts;

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
			br1 = element("br");
			t4 = space();
			br2 = element("br");
			t5 = space();
			br3 = element("br");
			t6 = space();
			div = element("div");

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].c();
			}

			t7 = space();
			form = element("form");
			input2 = element("input");
			t8 = space();
			br4 = element("br");
			t9 = space();
			input3 = element("input");
			t10 = space();
			button = element("button");
			button.textContent = "Save post";
			document.title = "Blog";
			attr(input0, "class", "blog-title svelte-o63xsf");
			add_location(input0, file, 54, 0, 1033);
			add_location(br0, file, 55, 0, 1110);
			attr(input1, "class", "blog-description svelte-o63xsf");
			add_location(input1, file, 56, 0, 1117);
			add_location(br1, file, 57, 0, 1186);
			add_location(br2, file, 58, 0, 1193);
			add_location(br3, file, 59, 0, 1200);
			attr(div, "id", "posts");
			add_location(div, file, 61, 0, 1208);
			attr(input2, "class", "new-post-title");
			attr(input2, "placeholder", "Title");
			add_location(input2, file, 72, 0, 1424);
			add_location(br4, file, 73, 0, 1523);
			attr(input3, "class", "new-post-body");
			attr(input3, "placeholder", "Body");
			add_location(input3, file, 74, 0, 1530);
			add_location(button, file, 75, 0, 1607);
			attr(form, "id", "newPost");
			add_location(form, file, 71, 0, 1364);

			dispose = [
				listen(input0, "input", ctx.input0_input_handler),
				listen(input0, "keyup", editBlog),
				listen(input1, "input", ctx.input1_input_handler),
				listen(input2, "input", ctx.input2_input_handler),
				listen(input2, "keyup", editBlog),
				listen(input3, "input", ctx.input3_input_handler),
				listen(form, "submit", prevent_default(ctx.handleSubmit))
			];
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, input0, anchor);

			input0.value = ctx.blogInfo.title;

			insert(target, t1, anchor);
			insert(target, br0, anchor);
			insert(target, t2, anchor);
			insert(target, input1, anchor);

			input1.value = ctx.blogInfo.description;

			insert(target, t3, anchor);
			insert(target, br1, anchor);
			insert(target, t4, anchor);
			insert(target, br2, anchor);
			insert(target, t5, anchor);
			insert(target, br3, anchor);
			insert(target, t6, anchor);
			insert(target, div, anchor);

			for (var i = 0; i < each_blocks.length; i += 1) {
				each_blocks[i].m(div, null);
			}

			insert(target, t7, anchor);
			insert(target, form, anchor);
			append(form, input2);

			input2.value = ctx.newPost.title;

			append(form, t8);
			append(form, br4);
			append(form, t9);
			append(form, input3);

			input3.value = ctx.newPost.body;

			append(form, t10);
			append(form, button);
		},

		p: function update(changed, ctx) {
			if (changed.blogInfo && (input0.value !== ctx.blogInfo.title)) input0.value = ctx.blogInfo.title;
			if (changed.blogInfo && (input1.value !== ctx.blogInfo.description)) input1.value = ctx.blogInfo.description;

			if (changed.posts) {
				each_value = ctx.posts;

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

			if (changed.newPost && (input2.value !== ctx.newPost.title)) input2.value = ctx.newPost.title;
			if (changed.newPost && (input3.value !== ctx.newPost.body)) input3.value = ctx.newPost.body;
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
				detach(br1);
				detach(t4);
				detach(br2);
				detach(t5);
				detach(br3);
				detach(t6);
				detach(div);
			}

			destroy_each(each_blocks, detaching);

			if (detaching) {
				detach(t7);
				detach(form);
			}

			run_all(dispose);
		}
	};
}

function editBlog(e) {
  if (e.key === "Enter") {
    window.gun
      .get("headline")
      .put({ title: title, description: description });
  }
}

function instance($$self, $$props, $$invalidate) {
	let posts = [];
  let blogInfo = {};
  let newPost = {
	  title: "",
	  body: ""
  };
  function handleSubmit(e){
	  console.log(e);
      if (posts[posts.length - 1] != null) {
        newPost.id = posts[posts.length - 1].id + 1; $$invalidate('newPost', newPost);
      } else {
        newPost.id = 0; $$invalidate('newPost', newPost);
      }
      window.gun.get("posts").set(newPost);
  }
  window.gun.get("headline").on(headLine => {
    blogInfo.title = headLine.title; $$invalidate('blogInfo', blogInfo);
    blogInfo.description = headLine.description; $$invalidate('blogInfo', blogInfo);
  });
  window.gun
    .get("posts")
    .map()
    .on(post => {
		console.log("aja gene nieuwen fwa?");
    });

	function input0_input_handler() {
		blogInfo.title = this.value;
		$$invalidate('blogInfo', blogInfo);
	}

	function input1_input_handler() {
		blogInfo.description = this.value;
		$$invalidate('blogInfo', blogInfo);
	}

	function input2_input_handler() {
		newPost.title = this.value;
		$$invalidate('newPost', newPost);
	}

	function input3_input_handler() {
		newPost.body = this.value;
		$$invalidate('newPost', newPost);
	}

	return {
		posts,
		blogInfo,
		newPost,
		handleSubmit,
		input0_input_handler,
		input1_input_handler,
		input2_input_handler,
		input3_input_handler
	};
}

class Blog extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, []);
	}
}

export default Blog;
//# sourceMappingURL=Blog-091aed7f.js.map
