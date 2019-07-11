import { S as SvelteComponentDev, i as init, s as safe_not_equal, a as space, e as element, t as text, c as add_location, b as attr, d as insert, f as append, n as noop, g as detach, r as globals } from './chunk-dc6d30d4.js';

/* src/routes/Article.svelte generated by Svelte v3.6.7 */
const { console: console_1 } = globals;

const file = "src/routes/Article.svelte";

function create_fragment(ctx) {
	var title_value, t0, h1, t1_value = ctx.post.title, t1, t2, div, raw_value = ctx.post.body;

	document.title = title_value = ctx.post.title;

	return {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			t1 = text(t1_value);
			t2 = space();
			div = element("div");
			add_location(h1, file, 4, 0, 59);
			attr(div, "class", "content svelte-13z8xhn");
			add_location(div, file, 6, 0, 82);
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			append(h1, t1);
			insert(target, t2, anchor);
			insert(target, div, anchor);
			div.innerHTML = raw_value;
		},

		p: function update(changed, ctx) {
			if ((changed.post) && title_value !== (title_value = ctx.post.title)) {
				document.title = title_value;
			}
		},

		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(h1);
				detach(t2);
				detach(div);
			}
		}
	};
}

let item = {};

function load(id) {
	// return fetch(`https://sapper-template.now.sh/blog/${title}.json`).then(r => r.json());
}

function preload(req) {
	console.log('~> preload');
	return load(req.params.title).then(obj => item = obj);
}

function instance($$self, $$props, $$invalidate) {
	// Comes from App (router)
	let { params = {} } = $$props;

	// Initial value (preload)
	let post = item;

	// Reactively update `post` value
	// $: if (params.title) load(params.title).then(obj => { post = obj });

	const writable_props = ['params'];
	Object.keys($$props).forEach(key => {
		if (!writable_props.includes(key) && !key.startsWith('$$')) console_1.warn(`<Article> was created with unknown prop '${key}'`);
	});

	$$self.$set = $$props => {
		if ('params' in $$props) $$invalidate('params', params = $$props.params);
	};

	return { params, post };
}

class Article extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["params"]);
	}

	get params() {
		throw new Error("<Article>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set params(value) {
		throw new Error("<Article>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default Article;
export { preload };
//# sourceMappingURL=Article-3452c5b9.js.map
