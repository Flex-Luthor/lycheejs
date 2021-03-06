
lychee.define('lychee.policy.Visible').exports(function(lychee, global, attachments) {

	/*
	 * IMPLEMENTATION
	 */

	let Composite = function(data) {

		let settings = lychee.assignsafe({
			entity: null
		}, data);


		this.entity = settings.entity || null;

		settings = null;

	};


	Composite.prototype = {

		/*
		 * ENTITY API
		 */

		// deserialize: function(blob) {},

		serialize: function() {

			let settings = {
				entity: null
			};


			return {
				'constructor': 'lychee.policy.Visible',
				'arguments':   [ settings ]
			};

		},



		/*
		 * CUSTOM API
		 */

		sensor: function() {

			let entity = this.entity;
			let values = [ 0.5 ];


			if (entity !== null) {

				let visible = entity.visible;
				if (visible === true) {
					values[0] = 1;
				} else if (visible === false) {
					values[0] = 0;
				}

			}


			return values;

		},

		control: function(values) {

			let entity = this.entity;


			if (entity !== null) {

				if (values[0] > 0.5) {
					entity.visible = true;
				} else if (values[0] < 0.5) {
					entity.visible = false;
				}

			}

		}

	};


	return Composite;

});

