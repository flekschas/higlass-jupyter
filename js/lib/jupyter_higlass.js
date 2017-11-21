var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');
var hglib_css = require('higlass/dist/styles/hglib.css');
var hglib = require('higlass/dist/scripts/hglib.js');

var myconfig = {
  "zoomFixed": false,
  "views": [
    {
      "layout": {
        "w": 6,
        "h": 3,
        "x": 0,
        "y": 0,
        "i": "eJLMGjH7Qm-zm_F_hqjXkw",
        "moved": false,
        "static": false
      },
      "uid": "eJLMGjH7Qm-zm_F_hqjXkw",
      "initialYDomain": [
        410185557.2165675,
        442701480.78343546
      ],
      "autocompleteSource": "http://higlass.io/api/v1/suggest/?d=OHJakQICQD6gTD7skx4EWA&",
      "initialXDomain": [
        413943519.00000536,
        438943518.99999464
      ],
      "tracks": {
        "left": [
          {
            "orientation": "1d-vertical",
            "tilesetUid": "fs487zYMSMG5XLPXsakQ3g",
            "type": "vertical-chromosome-labels",
            "minHeight": 30,
            "server": "",
            "minWidth": 30,
            "width": 30,
            "options": {},
            "chromInfoPath": "//s3.amazonaws.com/pkerp/data/mm9/chromSizes.tsv",
            "uid": "aiYnl3phRPCMfwyKxKaSow",
            "position": "left",
            "height": 1021,
            "local": true,
            "thumbnail": null,
            "name": "Chromosome Axis (mm9)"
          }
        ],
        "top": [
          {
            "type": "combined",
            "uid": "P09yHHiYTkitbhz_tc2p-g",
            "height": 73,
            "width": 778,
            "contents": [
              {
                "name": "Schwarzer et al (2017) TAM Eigenvectors 20K",
                "created": "2017-08-01T18:26:26.907896Z",
                "server": "http://higlass.io/api/v1",
                "tilesetUid": "ZsjN4ZkJSu6PASiw_kVIrw",
                "uid": "MkQpCTWwRkWgGFRu3pCrlA",
                "type": "horizontal-line",
                "options": {
                  "labelColor": "blue",
                  "labelPosition": "bottomLeft",
                  "axisPositionHorizontal": "right",
                  "lineStrokeColor": "blue",
                  "lineStrokeWidth": 1,
                  "valueScaling": "linear",
                  "trackBorderWidth": 0,
                  "trackBorderColor": "black",
                  "labelTextOpacity": 0.4,
                  "name": "Schwarzer et al (2017) TAM Eigenvectors 20K"
                },
                "position": "top",
                "width": 778,
                "height": 73
              },
              {
                "name": "Schwarzer et al (2017) NIPBL Eigenvectors 20K",
                "created": "2017-08-01T18:25:52.029116Z",
                "server": "http://higlass.io/api/v1",
                "tilesetUid": "TvzFzi-LQle0nt3OlODEdA",
                "uid": "ceu6Ikv9Q52laESIf_FtiA",
                "type": "horizontal-line",
                "options": {
                  "labelColor": "red",
                  "labelPosition": "topRight",
                  "axisPositionHorizontal": "right",
                  "lineStrokeColor": "red",
                  "lineStrokeWidth": 1,
                  "valueScaling": "linear",
                  "trackBorderWidth": 0,
                  "trackBorderColor": "black",
                  "labelTextOpacity": 0.4,
                  "name": "Schwarzer et al (2017) NIPBL Eigenvectors 20K"
                },
                "position": "top",
                "width": 778,
                "height": 73
              }
            ],
            "position": "top",
            "options": {}
          },
          {
            "orientation": "1d-horizontal",
            "tilesetUid": "cGSJELSNRyOaExsJL0KejQ",
            "type": "horizontal-chromosome-labels",
            "minHeight": 30,
            "server": "",
            "width": 778,
            "options": {},
            "chromInfoPath": "//s3.amazonaws.com/pkerp/data/mm9/chromSizes.tsv",
            "uid": "EsCrHgpLQoSO8fJo8PX-9w",
            "position": "top",
            "height": 30,
            "local": true,
            "thumbnail": null,
            "name": "Chromosome Axis (mm9)"
          }
        ],
        "right": [],
        "center": [
          {
            "position": "center",
            "type": "combined",
            "uid": "Dbaw-ZX2RMqOx_1ogCGA8Q",
            "contents": [
              {
                "uid": "e8OrP0OmRoiEb434kSoypg",
                "tilesetUid": "cTc3lt_7StSgcrr1kHWidQ",
                "server": "http://higlass.io/api/v1",
                "width": 778,
                "position": "center",
                "height": 1021,
                "type": "heatmap",
                "options": {
                  "maxZoom": null,
                  "colorRange": [
                    "white",
                    "rgba(245,166,35,1.0)",
                    "rgba(208,2,27,1.0)",
                    "black"
                  ],
                  "labelPosition": "bottomRight",
                  "name": "WT",
                  "colorbarLabelsPosition": "inside",
                  "colorbarPosition": "topRight",
                  "trackBorderWidth": 0,
                  "trackBorderColor": "black",
                  "heatmapValueScaling": "log",
                  "scaleStartPercent": "0.00000",
                  "scaleEndPercent": "0.19657"
                },
                "name": "Schwarzer et al (2017) WT",
                "transforms": [
                  {
                    "name": "ICE",
                    "value": "weight"
                  }
                ]
              },
              {
                "name": "Chromosome Grid",
                "created": "2017-06-06T17:55:18.944112Z",
                "server": "http://higlass.io/api/v1",
                "tilesetUid": "WAVhNHYxQVueq6KulwgWiQ",
                "uid": "I2lm-h89SeGLXakP682b6w",
                "type": "2d-chromosome-grid",
                "options": {
                  "lineStrokeWidth": 1,
                  "lineStrokeColor": "grey"
                },
                "width": 778,
                "height": 1021,
                "position": "center"
              }
            ],
            "options": {},
            "width": 778,
            "height": 1021
          }
        ],
        "bottom": []
      },
      "chromInfoPath": "//s3.amazonaws.com/pkerp/data/mm9/chromSizes.tsv",
      "genomePositionSearchBoxVisible": true,
      "genomePositionSearchBox": {
        "autocompleteServer": "http://higlass.io/api/v1",
        "chromInfoServer": "http://higlass.io/api/v1",
        "visible": true,
        "chromInfoId": "mm9",
        "autocompleteId": "GUm5aBiLRCyz2PsBea7Yzg"
      }
    },
    {
      "layout": {
        "w": 6,
        "h": 3,
        "x": 6,
        "y": 0,
        "i": "XsfNzSHTRI2DVLwXF9AFcw",
        "moved": false,
        "static": false
      },
      "uid": "XsfNzSHTRI2DVLwXF9AFcw",
      "initialYDomain": [
        410185557.2165383,
        442701480.78346604
      ],
      "autocompleteSource": "http://higlass.io/api/v1/suggest/?d=OHJakQICQD6gTD7skx4EWA&",
      "initialXDomain": [
        413943518.9999817,
        438943519.0000184
      ],
      "tracks": {
        "left": [
          {
            "orientation": "1d-vertical",
            "tilesetUid": "fs487zYMSMG5XLPXsakQ3g",
            "type": "vertical-chromosome-labels",
            "minHeight": 30,
            "server": "",
            "minWidth": 30,
            "width": 30,
            "options": {},
            "chromInfoPath": "//s3.amazonaws.com/pkerp/data/mm9/chromSizes.tsv",
            "uid": "aiYnl3phRPCMfwyKxKaSow",
            "position": "left",
            "height": 1021,
            "local": true,
            "thumbnail": null,
            "name": "Chromosome Axis (mm9)"
          }
        ],
        "top": [
          {
            "type": "combined",
            "uid": "P09yHHiYTkitbhz_tc2p-g",
            "height": 73,
            "width": 778,
            "contents": [
              {
                "name": "Schwarzer et al (2017) TAM Eigenvectors 20K",
                "created": "2017-08-01T18:26:26.907896Z",
                "server": "http://higlass.io/api/v1",
                "tilesetUid": "ZsjN4ZkJSu6PASiw_kVIrw",
                "uid": "MkQpCTWwRkWgGFRu3pCrlA",
                "type": "horizontal-line",
                "options": {
                  "labelColor": "blue",
                  "labelPosition": "bottomLeft",
                  "axisPositionHorizontal": "right",
                  "lineStrokeColor": "blue",
                  "lineStrokeWidth": 1,
                  "valueScaling": "linear",
                  "trackBorderWidth": 0,
                  "trackBorderColor": "black",
                  "labelTextOpacity": 0.4,
                  "name": "Schwarzer et al (2017) TAM Eigenvectors 20K"
                },
                "position": "top",
                "width": 778,
                "height": 73
              },
              {
                "name": "Schwarzer et al (2017) NIPBL Eigenvectors 20K",
                "created": "2017-08-01T18:25:52.029116Z",
                "server": "http://higlass.io/api/v1",
                "tilesetUid": "TvzFzi-LQle0nt3OlODEdA",
                "uid": "ceu6Ikv9Q52laESIf_FtiA",
                "type": "horizontal-line",
                "options": {
                  "labelColor": "red",
                  "labelPosition": "topRight",
                  "axisPositionHorizontal": "right",
                  "lineStrokeColor": "red",
                  "lineStrokeWidth": 1,
                  "valueScaling": "linear",
                  "trackBorderWidth": 0,
                  "trackBorderColor": "black",
                  "labelTextOpacity": 0.4,
                  "name": "Schwarzer et al (2017) NIPBL Eigenvectors 20K"
                },
                "position": "top",
                "width": 778,
                "height": 73
              }
            ],
            "position": "top",
            "options": {}
          },
          {
            "orientation": "1d-horizontal",
            "tilesetUid": "cGSJELSNRyOaExsJL0KejQ",
            "type": "horizontal-chromosome-labels",
            "minHeight": 30,
            "server": "",
            "width": 778,
            "options": {},
            "chromInfoPath": "//s3.amazonaws.com/pkerp/data/mm9/chromSizes.tsv",
            "uid": "EsCrHgpLQoSO8fJo8PX-9w",
            "position": "top",
            "height": 30,
            "local": true,
            "thumbnail": null,
            "name": "Chromosome Axis (mm9)"
          }
        ],
        "right": [],
        "center": [
          {
            "uid": "MjhmgQDFQWCGX2Gb5Y32Aw",
            "type": "combined",
            "contents": [
              {
                "name": "Schwarzer et al (2017) NIPBL",
                "created": "2017-06-19T19:35:12.517935Z",
                "server": "http://higlass.io/api/v1",
                "tilesetUid": "J2IoKaXJSG-5bH1pITTtTg",
                "uid": "MNtX6PNHRJmhOYOhQi8Fjw",
                "type": "heatmap",
                "options": {
                  "labelPosition": "bottomRight",
                  "colorRange": [
                    "white",
                    "rgba(245,166,35,1.0)",
                    "rgba(208,2,27,1.0)",
                    "black"
                  ],
                  "maxZoom": null,
                  "colorbarLabelsPosition": "inside",
                  "colorbarPosition": "topRight",
                  "trackBorderWidth": 0,
                  "trackBorderColor": "black",
                  "name": "Schwarzer et al (2017) NIPBL",
                  "heatmapValueScaling": "log",
                  "scaleStartPercent": "0.00000",
                  "scaleEndPercent": "0.19657"
                },
                "width": 778,
                "height": 1021,
                "transforms": [
                  {
                    "name": "ICE",
                    "value": "weight"
                  }
                ],
                "position": "center"
              },
              {
                "name": "Chromosome Grid",
                "created": "2017-06-06T17:55:18.944112Z",
                "server": "http://higlass.io/api/v1",
                "tilesetUid": "WAVhNHYxQVueq6KulwgWiQ",
                "uid": "brnABQIxQk-mVd6qkmMFsg",
                "type": "2d-chromosome-grid",
                "options": {
                  "lineStrokeWidth": 1,
                  "lineStrokeColor": "grey"
                },
                "width": 778,
                "height": 1021,
                "position": "center"
              }
            ],
            "position": "center",
            "options": {},
            "width": 778,
            "height": 1021
          }
        ],
        "bottom": []
      },
      "chromInfoPath": "//s3.amazonaws.com/pkerp/data/mm9/chromSizes.tsv",
      "genomePositionSearchBoxVisible": true,
      "genomePositionSearchBox": {
        "autocompleteServer": "http://higlass.io/api/v1",
        "chromInfoServer": "http://higlass.io/api/v1",
        "visible": true,
        "chromInfoId": "mm9",
        "autocompleteId": "GUm5aBiLRCyz2PsBea7Yzg"
      }
    }
  ],
  "editable": true,
  "exportViewUrl": "http://higlass.io/api/v1/viewconfs",
  "zoomLocks": {
    "locksByViewUid": {
      "eJLMGjH7Qm-zm_F_hqjXkw": "ClLFoZHnR6SXkHLWcQQ8VQ",
      "XsfNzSHTRI2DVLwXF9AFcw": "ClLFoZHnR6SXkHLWcQQ8VQ"
    },
    "locksDict": {
      "ClLFoZHnR6SXkHLWcQQ8VQ": {
        "XsfNzSHTRI2DVLwXF9AFcw": [
          1826729704.5668445,
          1841443958.534043,
          243964.41801404953
        ],
        "eJLMGjH7Qm-zm_F_hqjXkw": [
          1826729704.5668445,
          1841443958.534043,
          243964.4180135727
        ]
      }
    }
  },
  "trackSourceServers": [
    "http://higlass.io/api/v1"
  ],
  "locationLocks": {
    "locksByViewUid": {
      "aa": "cDgHKq3ORy2uRacaaT1VvA",
      "Kq_XUAkFQjmMjoMJ8ocYNA": "IM2CjFNfQ_6fNzF7pBT1nA",
      "eJLMGjH7Qm-zm_F_hqjXkw": "IywUvNOAQLCACnxgIzSTOQ",
      "CxSCeaTbQbmmz2_3MX23Sw": "cDgHKq3ORy2uRacaaT1VvA",
      "BI8YmooFSCuI9zluz_ehnA": "IywUvNOAQLCACnxgIzSTOQ",
      "KrP5zcaVSxqCj6mEI8WA2A": "cDgHKq3ORy2uRacaaT1VvA",
      "XYOBq1xqTUy1I1xiU6O0AA": "IywUvNOAQLCACnxgIzSTOQ",
      "Mn_SlyIARcqhfHGKUFvUdQ": "IywUvNOAQLCACnxgIzSTOQ",
      "XsfNzSHTRI2DVLwXF9AFcw": "IywUvNOAQLCACnxgIzSTOQ"
    },
    "locksDict": {
      "cDgHKq3ORy2uRacaaT1VvA": {
        "aa": [
          1974905964.0722282,
          1957723677.6934438,
          406590.3164639473
        ],
        "KrP5zcaVSxqCj6mEI8WA2A": [
          1974905964.0722282,
          1957723677.693444,
          406590.3164639473
        ],
        "CxSCeaTbQbmmz2_3MX23Sw": [
          1974905964.0722282,
          1957723677.693444,
          406590.3164639473
        ]
      },
      "IM2CjFNfQ_6fNzF7pBT1nA": {
        "eJLMGjH7Qm-zm_F_hqjXkw": [
          1966916755.7812533,
          1972013566.595924,
          79705.25699186325
        ],
        "Kq_XUAkFQjmMjoMJ8ocYNA": [
          1966916755.7812533,
          1972013566.595924,
          79705.25699186325
        ],
        "BI8YmooFSCuI9zluz_ehnA": [
          1966916755.7812533,
          1972013566.595924,
          79705.25699186325
        ]
      },
      "IywUvNOAQLCACnxgIzSTOQ": {
        "XsfNzSHTRI2DVLwXF9AFcw": [
          1826729704.5668445,
          1841443958.534043,
          243964.41801404953
        ],
        "Mn_SlyIARcqhfHGKUFvUdQ": [
          1826729704.5668445,
          1841443958.5340428,
          243964.41801404953
        ],
        "XYOBq1xqTUy1I1xiU6O0AA": [
          1826729704.5668442,
          1841443958.5340428,
          243964.41801404953
        ],
        "eJLMGjH7Qm-zm_F_hqjXkw": [
          1826729704.5668445,
          1841443958.534043,
          243964.4180135727
        ],
        "BI8YmooFSCuI9zluz_ehnA": [
          1826729704.5668442,
          1841443958.5340421,
          243964.41801309586
        ]
      }
    }
  },
  "valueScaleLocks": {
    "locksByViewUid": {
      "XsfNzSHTRI2DVLwXF9AFcw.MNtX6PNHRJmhOYOhQi8Fjw": "MzEOjMHwTIy4DeeZwVCYkA",
      "eJLMGjH7Qm-zm_F_hqjXkw.e8OrP0OmRoiEb434kSoypg": "MzEOjMHwTIy4DeeZwVCYkA",
      "eJLMGjH7Qm-zm_F_hqjXkw.I2lm-h89SeGLXakP682b6w": "MzEOjMHwTIy4DeeZwVCYkA",
      "XsfNzSHTRI2DVLwXF9AFcw.brnABQIxQk-mVd6qkmMFsg": "MzEOjMHwTIy4DeeZwVCYkA",
      "eJLMGjH7Qm-zm_F_hqjXkw.MkQpCTWwRkWgGFRu3pCrlA": "dh6YxmLnRxabca2ubZrE8A",
      "eJLMGjH7Qm-zm_F_hqjXkw.ceu6Ikv9Q52laESIf_FtiA": "dh6YxmLnRxabca2ubZrE8A",
      "XsfNzSHTRI2DVLwXF9AFcw.MkQpCTWwRkWgGFRu3pCrlA": "FchVg7HkSGKWEwL7UnfMnw",
      "XsfNzSHTRI2DVLwXF9AFcw.ceu6Ikv9Q52laESIf_FtiA": "FchVg7HkSGKWEwL7UnfMnw"
    },
    "locksDict": {
      "MzEOjMHwTIy4DeeZwVCYkA": {
        "XsfNzSHTRI2DVLwXF9AFcw.brnABQIxQk-mVd6qkmMFsg": {
          "view": "XsfNzSHTRI2DVLwXF9AFcw",
          "track": "brnABQIxQk-mVd6qkmMFsg"
        },
        "XsfNzSHTRI2DVLwXF9AFcw.MNtX6PNHRJmhOYOhQi8Fjw": {
          "view": "XsfNzSHTRI2DVLwXF9AFcw",
          "track": "MNtX6PNHRJmhOYOhQi8Fjw"
        },
        "eJLMGjH7Qm-zm_F_hqjXkw.e8OrP0OmRoiEb434kSoypg": {
          "view": "eJLMGjH7Qm-zm_F_hqjXkw",
          "track": "e8OrP0OmRoiEb434kSoypg"
        },
        "eJLMGjH7Qm-zm_F_hqjXkw.I2lm-h89SeGLXakP682b6w": {
          "view": "eJLMGjH7Qm-zm_F_hqjXkw",
          "track": "I2lm-h89SeGLXakP682b6w"
        }
      },
      "dh6YxmLnRxabca2ubZrE8A": {
        "eJLMGjH7Qm-zm_F_hqjXkw.MkQpCTWwRkWgGFRu3pCrlA": {
          "view": "eJLMGjH7Qm-zm_F_hqjXkw",
          "track": "MkQpCTWwRkWgGFRu3pCrlA"
        },
        "eJLMGjH7Qm-zm_F_hqjXkw.ceu6Ikv9Q52laESIf_FtiA": {
          "view": "eJLMGjH7Qm-zm_F_hqjXkw",
          "track": "ceu6Ikv9Q52laESIf_FtiA"
        }
      },
      "FchVg7HkSGKWEwL7UnfMnw": {
        "XsfNzSHTRI2DVLwXF9AFcw.MkQpCTWwRkWgGFRu3pCrlA": {
          "view": "XsfNzSHTRI2DVLwXF9AFcw",
          "track": "MkQpCTWwRkWgGFRu3pCrlA"
        },
        "XsfNzSHTRI2DVLwXF9AFcw.ceu6Ikv9Q52laESIf_FtiA": {
          "view": "XsfNzSHTRI2DVLwXF9AFcw",
          "track": "ceu6Ikv9Q52laESIf_FtiA"
        }
      }
    }
  }
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

        hglib.createHgComponent(
            this.hgdisplay,
            myconfig,
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
