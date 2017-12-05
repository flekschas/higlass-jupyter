from ._version import version_info, __version__
import ipywidgets as widgets
from traitlets import Unicode
from traitlets import default
from traitlets import List


def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'jupyter_higlass',
        'require': 'jupyter_higlass/extension'
    }]


class HiGlassDisplay(widgets.DOMWidget):
    _view_name = Unicode('HiGlassDisplayView').tag(sync=True)
    _model_name = Unicode('HiGlassDisplayModel').tag(sync=True)
    _view_module = Unicode('jupyter_higlass').tag(sync=True)
    _model_module = Unicode('jupyter_higlass').tag(sync=True)
    _model_data = List([]).tag(sync=True)

    # @default('layout')
    # def _default_layout(self):
    #     return widgets.Layout(height='600px', align_self='stretch')

    # def set_data(self, js_data):
    #     self._model_data = js_data
