import tornado.web
from status.util import SafeHandler

class Vue_PGHandler(SafeHandler):
    def get(self):
        t = self.application.loader.load('vue_playground.html')
        self.write(t.generate(gs_globals=self.application.gs_globals,
                              user=self.get_current_user()))