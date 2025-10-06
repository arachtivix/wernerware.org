#!/usr/bin/env bb

;; Script to generate chess SVG from FEN notation
;; Usage: bb generate-svg.clj <fen> <output-path>

(require '[chess-variants-display.core :as cvd])
(require '[clojure.string :as str])

(defn generate-svg [fen output-path]
  (let [pieces (cvd/fen->pieces fen)
        svg-content (cvd/checkerboard-with-pieces 8 8 :dark pieces)
        ;; Add CSS styling directly to the SVG by inserting after the opening tag
        styled-svg (str/replace-first svg-content
                     #"<svg[^>]*>"
                     (fn [match]
                       (str (str/replace match #">" "")
                            "><defs><style type=\"text/css\"><![CDATA[.dark-square { fill: #b58863; } .light-square { fill: #f0d9b5; } .chess-piece { font-size: 40px; fill: #000000; user-select: none; }]]></style></defs>")))]
    (spit output-path styled-svg)
    (println (str "Generated: " output-path))))

;; Get command line arguments
(let [[fen output-path] *command-line-args*]
  (when (or (nil? fen) (nil? output-path))
    (println "Usage: bb generate-svg.clj <fen> <output-path>")
    (System/exit 1))
  (generate-svg fen output-path))
