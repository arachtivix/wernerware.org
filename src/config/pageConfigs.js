// Page configurations for the reusable ContentPage component

export const homePageConfig = {
  title: "WernerWare",
  description: 'Welcome to a site dedicated to the exploration of <a href="https://en.wikipedia.org/wiki/Combinatorial_game_theory" target="_blank" rel="noopener noreferrer">combinatorial game theory</a>, <a href="https://en.wikipedia.org/wiki/Chess" target="_blank" rel="noopener noreferrer">chess</a>, and programming.',
  pageType: "home",
  contentSections: [
    {
      title: "Mathematical Foundations",
      type: "content-section",
      content: [
        '<strong><a href="https://en.wikipedia.org/wiki/On_Numbers_and_Games" target="_blank" rel="noopener noreferrer">On Numbers and Games</a></strong> by John Conway is a foundational text that introduces surreal numbers and provides the mathematical framework for analyzing combinatorial games. It establishes the theory of partizan games and demonstrates how numbers emerge naturally from game positions.',
        '<strong><a href="https://en.wikipedia.org/wiki/Winning_Ways_for_Your_Mathematical_Plays" target="_blank" rel="noopener noreferrer">Winning Ways for your Mathematical Plays</a></strong> by Berlekamp, Conway, and Guy is the comprehensive guide to combinatorial game theory. This multi-volume work explores impartial games, nim-like games, and provides practical strategies for analyzing and solving complex game positions.'
      ]
    },
    {
      title: "Chess Programming",
      type: "content-section",
      content: [
        'The <a href="https://www.chessprogramming.org/" target="_blank" rel="noopener noreferrer">Chess Programming Wiki</a> serves as the definitive resource for chess engine development and computer chess research.',
        'Chess programming encompasses several fascinating areas:',
        {
          type: 'list',
          items: [
            '<strong>Search Algorithms:</strong> Alpha-beta pruning, minimax search, and advanced techniques like principal variation search',
            '<strong>Evaluation Functions:</strong> Position assessment, material balance, and positional factors',
            '<strong>Move Generation:</strong> Efficient algorithms for generating legal moves and attack detection',
            '<strong>Opening Books:</strong> Database-driven opening play and book learning',
            '<strong>Endgame Tablebases:</strong> Perfect play databases for simplified positions',
            '<strong>Machine Learning:</strong> Neural networks and deep learning approaches in modern engines'
          ]
        }
      ]
    }
  ]
}

export const chessPageConfig = {
  title: "Chess",
  description: "Explore the mathematical and computational aspects of chess through three main areas of study: combinatorial game theory applications, endgame analysis, and state space enumeration.",
  pageType: "chess",
  cardSections: [
    {
      title: "Chess-like Combinatorial Games",
      to: "/chess/combinatorial-games",
      description: "Explore chess variants and modifications that provide insights into combinatorial game theory, strategic complexity, and mathematical game analysis."
    },
    {
      title: "Endgames",
      to: "/chess/endgames",
      description: "Study classical chess endgames, theoretical positions, and the mathematical principles that govern play with reduced material."
    },
    {
      title: "Counting Game States",
      to: "/chess/game-states",
      description: "Investigate the combinatorial complexity of chess through position counting, game tree analysis, and computational approaches to chess complexity."
    }
  ]
}

export const chessCombinatorialGamesPageConfig = {
  title: "Chess-like Combinatorial Games",
  description: "Chess-like combinatorial games extend the principles of traditional chess into broader mathematical frameworks. These games maintain the strategic depth of chess while exploring different rule sets, board configurations, and winning conditions that provide insights into combinatorial game theory.",
  pageType: "chess",
  contentSections: [
    {
      title: "Game Variants",
      content: "These games often feature modified rules such as different piece movements, altered board sizes, or unique objective conditions. Examples include Chess960 (Fischer Random Chess), King of the Hill, and Three-Check Chess, each offering distinct strategic challenges while maintaining the core tactical elements that make chess compelling."
    },
    {
      title: "Mathematical Analysis",
      content: "From a combinatorial perspective, these variants provide excellent case studies for analyzing game trees, strategic complexity, and the mathematical properties of perfect information games. They bridge the gap between recreational gaming and serious mathematical research."
    }
  ]
}

export const chessEndgamesPageConfig = {
  title: "Chess Endgames",
  description: "Chess endgames represent the culmination of strategic play where precise calculation and deep understanding of fundamental principles determine the outcome. These positions, typically involving fewer pieces, reveal the pure essence of chess tactics and strategy.",
  pageType: "chess",
  contentSections: [
    {
      title: "Endgame Theory",
      content: "Endgame theory encompasses the systematic study of positions with reduced material. Key concepts include king and pawn endings, rook endings, minor piece endings, and complex multi-piece endgames. Understanding these fundamental positions is crucial for converting advantages and defending difficult positions."
    }
  ]
}

export const chessGameStatesPageConfig = {
  title: "Counting Game States",
  description: "The mathematical analysis of chess involves counting and categorizing the vast number of possible game states. This combinatorial approach provides insights into the complexity of chess and helps in developing efficient algorithms for chess engines and analysis tools.",
  pageType: "chess",
  contentSections: [
    {
      title: "Position Counting",
      content: 'Chess has an estimated 10⁴⁰ to 10⁵⁰ possible positions (<a href="https://web.archive.org/web/20200523062243/http://archive.computerhistory.org/projects/chess/related_materials/text/2-0%20and%202-1.Programming_a_computer_for_playing_chess.shannon/2-0%20and%202-1.Programming_a_computer_for_playing_chess.shannon.062303002.pdf" target="_blank" rel="noopener noreferrer">Shannon, 1950</a>), making exhaustive analysis computationally impossible. However, the intent is to find smaller positions whose state count may be more limited and thus may be more amenable to computational analysis. By categorizing positions by material balance, pawn structure, and piece activity, we can develop meaningful statistical measures and strategic guidelines for different types of positions.'
    },
    {
      title: "Game Tree Complexity", 
      content: 'The game tree complexity of chess is approximately 10¹²³ (<a href="http://fragrieu.free.fr/SearchingForSolutions.pdf" target="_blank" rel="noopener noreferrer">Allis, 1994</a>), representing the number of possible games. This enormous branching factor necessitates sophisticated pruning techniques and heuristic evaluation methods in computer chess programs. Understanding these numbers helps in appreciating both the richness of chess and the computational challenges it presents, while motivating the search for smaller, more tractable subsets of positions for detailed analysis.'
    },
    {
      title: "Practical Applications",
      content: "Counting game states has practical applications in opening theory, where transposition tables help reduce redundant analysis, and in endgame databases, where complete enumeration of positions with few pieces provides perfect play solutions. These techniques bridge theoretical mathematics with practical chess improvement."
    }
  ]
}