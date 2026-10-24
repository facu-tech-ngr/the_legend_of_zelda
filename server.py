"""Servidor local opcional. La web funciona igual sin Python (GitHub Pages)."""
import os
try:
    from flask import Flask, send_from_directory
    app = Flask(__name__, static_folder=None)
    ROOT = os.path.dirname(os.path.abspath(__file__))

    @app.route("/")
    def index():
        return send_from_directory(ROOT, "index.html")

    @app.route("/<path:p>")
    def static_files(p):
        return send_from_directory(ROOT, p)

    if __name__ == "__main__":
        app.run(port=5000)
except ImportError:  # alternativa sin dependencias
    import http.server, socketserver
    print("Flask no instalado; sirviendo en http://localhost:5000")
    with socketserver.TCPServer(("", 5000), http.server.SimpleHTTPRequestHandler) as s:
        s.serve_forever()
