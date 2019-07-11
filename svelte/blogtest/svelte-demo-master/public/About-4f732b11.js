import { S as SvelteComponentDev, i as init, s as safe_not_equal, a as space, e as element, c as add_location, d as insert, n as noop, g as detach } from './chunk-54581008.js';

/* src/routes/About.svelte generated by Svelte v3.6.7 */

const file = "src/routes/About.svelte";

function create_fragment(ctx) {
	var t0, h1, t2, p;

	return {
		c: function create() {
			t0 = space();
			h1 = element("h1");
			h1.textContent = "About this site";
			t2 = space();
			p = element("p");
			p.textContent = "This is the 'about' page. There's not much here.";
			document.title = "About";
			add_location(h1, file, 4, 0, 52);
			add_location(p, file, 6, 0, 78);
		},

		l: function claim(nodes) {
			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, h1, anchor);
			insert(target, t2, anchor);
			insert(target, p, anchor);
		},

		p: noop,
		i: noop,
		o: noop,

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(h1);
				detach(t2);
				detach(p);
			}
		}
	};
}

class About extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default About;
//# sourceMappingURL=About-4f732b11.js.map
