jupyter-higlass
===============================

HiGlass in your Jupyter Notebook

NB Extensions
-----------
First make sure you have Jupyter Notebook and the Widgets nbextension installed. If you are using a virtual environment such as a conda environment, it is best to always add the `--sys-prefix` option when registering nbextensions so that the extension code is registered under the environment's prefix, `{sys.prefix}/share/jupyter/nbextensions/`.

	$ pip install jupyter[complete]
	$ jupyter nbextension enable --py --sys-prefix widgetsnbextension

Optionall, the following extension adds the nbextension panel to your Jupyter Notebook App. Not necessary, but nice to have.

	$ pip install jupyter_contrib_nbextensions
	$ jupyter contrib nbextension install --sys-prefix


Development
-----------

Install this repo as a Python package. With pip's `-e` option, the package is installed in developer/editable mode, such that the `jupyter_higlass` package is linked Python's `site-packages` directory rather than copied there. This way the package can be edited directly in the repo with no need for build or re-installing.

    $ git clone https://github.com/nvictus/jupyter-higlass.git
    $ cd jupyter-higlass
    $ pip install -e .

Compile and install the Javascript notebook extension (requires npm). With the `--symlink` option, the compiled Javascript in `jupyter_higlass/static` is linked to the extension directory rather than copied. This way both the Python package and front-end assets are linked from the repo.

	$ python setup.py jsdeps
    $ jupyter nbextension install --py --sys-prefix --symlink jupyter_higlass
    $ jupyter nbextension enable --py --sys-prefix jupyter_higlass

The javascript source code is in the repo's `js` directory. To recompile the static assets after editing the source, use `python setup.py jsdeps` or run webpack.


Uninstall
---------

To uninstall both the Python package and Javascript extension:

	$ pip uninstall jupyter_higlass
	$ jupyter nbextension uninstall --py --sys-prefix jupyter_higlass


Resources
---------

* http://kazuar.github.io/jupyter-widget-tutorial/
* https://ipywidgets.readthedocs.io/
