var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');
var hglib_css = require('higlass/dist/styles/hglib.css');
var hglib = require('higlass/dist/scripts/hglib.js');

var minimalConfig = {
  "trackSourceServers": [
    "http://higlass.io/api/v1"
  ],
  "exportViewUrl": "http://higlass.io/api/v1/viewconfs",
  "editable": true,
  "zoomFixed": false,
  "views": [
    {
      "layout": {
        "w": 12,
        "h": 6,
        "x": 0,
        "y": 0
      },
      "initialXDomain": [
        0,
        3000000000
      ],
      "initialYDomain": [
        0,
        3000000000
      ],
      "tracks": {
        "left": [],
        "right": [],
        "top": [],
        "bottom": []
      } 
    }
  ]
};

var HiGlassDisplayModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(_.result(this, 'widgets.DOMWidgetModel.prototype.defaults'), {
        _model_name : 'HiGlassDisplayModel',
        _view_name : 'HiGlassDisplayView',
        _model_module : 'jupyter_higlass',
        _view_module : 'jupyter_higlass',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0'
    })
});

// Custom View. Renders the widget model.
var HiGlassDisplayView = widgets.DOMWidgetView.extend({
  
    render: function() {
        console.log('this.model:', this.model.get('viewconf'));
        this.hgcontainer = document.createElement('div');
        // this.hgcontainer.style.margin = '1em';
        // this.hgcontainer.style.boxSizing = 'border-box';
        // this.hgcontainer.style.lineHeight = '48px';

        this.hgdisplay = document.createElement('div');
        this.hgdisplay.style.height = '600px';
        this.hgdisplay.style.border = '1px solid black';
        this.hgdisplay.style.borderRadius = '1%';
        this.hgdisplay.style.borderColor = '#dddddd';

        this.hgcontainer.appendChild(this.hgdisplay);
        this.el.appendChild(this.hgcontainer);

        const minimalConfig = this.model.get('viewconf');

        hglib.createHgComponent(
            this.hgdisplay,
            JSON.parse(minimalConfig),
            { bounded: true },
            function (api) {
                window.hgApi = api;
            }
        );     
    }
});

module.exports = {
    HiGlassDisplayModel: HiGlassDisplayModel,
    HiGlassDisplayView: HiGlassDisplayView
};
