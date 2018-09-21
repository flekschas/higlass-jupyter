jupyter-higlass
===============================

HiGlass Widget Extension for your Jupyter Notebook

Jupyter and Notebook Extensions
-------------------------
First make sure you have Jupyter Notebook and the [Widgets](https://ipywidgets.readthedocs.io/en/stable/) Notebook Extension installed. If you are using a virtual environment such as a conda environment, it is best to always add the `--sys-prefix` option when registering nbextensions so that the extension code is registered under the environment's prefix, `{sys.prefix}/share/jupyter/nbextensions/`.

	$ pip install jupyter[complete]
	$ jupyter nbextension enable --py --sys-prefix widgetsnbextension

Optionally, the following [Unofficial Community Extensions](http://jupyter-contrib-nbextensions.readthedocs.io/en/latest/) package adds the nbextension panel to your Jupyter Notebook App, as well as a bunch of other extensions. Not necessary, but nice to have.

	$ pip install jupyter_contrib_nbextensions
	$ jupyter contrib nbextension install --sys-prefix


Development
-----------

1\. Install this repo as a Python package. With pip's `-e` option, the package is installed in developer (a.k.a. editable) mode, such that the `jupyter_higlass` package is linked Python's `site-packages` directory rather than copied there. This way the package can be edited directly in the repo with no need for build or re-installing.

    $ git clone https://github.com/pkerpedjiev/higlass-jupyter.git
    $ cd jupyter-higlass
    $ pip install -e .

2\. Compile and install the Javascript notebook extension (requires npm). With the `--symlink` option, the compiled Javascript in `jupyter_higlass/static` is linked to the extension registry rather than copied. This way both the Python package and front-end assets are linked from the repo.

	$ python setup.py jsdeps
    $ jupyter nbextension install --py --sys-prefix --symlink higlass_jupyter
    $ jupyter nbextension enable --py --sys-prefix higlass_jupyter

The Javascript source code is in the repo's `js` directory. To recompile the static assets after editing the source, use `python setup.py jsdeps` or run webpack.

Example
-------

A working example can be found in ``notebooks/Example.ipynb``. The workflow is simple. Create a viewconf
and then pass it to the HiGlassComponent:

```
minimal_config = {
  "trackSourceServers": [
    "http://higlass.io/api/v1"
  ],
  "exportViewUrl": "http://higlass.io/api/v1/viewconfs",
  "editable": "true",
  "zoomFixed": "false",
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
        "center":  [{
                "name": "Rao et al. (2014) GM12878 MboI (allreps) 1kb",
                "server": "http://higlass.io/api/v1",
                "tilesetUid": "CQMd6V_cRw6iCI_-Unl3PQ",
                "type": "heatmap"
              }],
        "top": [],
        "bottom": []
      }
    }
  ]
}

import json
import jupyter_higlass
jupyter_higlass.HiGlassDisplay(viewconf=json.dumps(minimal_config))
```


Uninstall
---------

To uninstall both the Python package and Javascript extension:

	$ pip uninstall jupyter_higlass
	$ jupyter nbextension uninstall --py --sys-prefix higlass_jupyter


Resources
---------

* http://jupyter.org/widgets.html
* http://kazuar.github.io/jupyter-widget-tutorial/
* https://ipywidgets.readthedocs.io/
* https://jupyter-notebook.readthedocs.io/en/latest/extending/frontend_extensions.html
* https://carreau.gitbooks.io/jupyter-book/content/notebook-extensions.html
* https://mindtrove.info/4-ways-to-extend-jupyter-notebook/
