// src/app/quote-display/quote-display.component.ts
import { Component, OnInit } from '@angular/core';
import { QuotesService } from '../quotes.service';
@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.scss']
})
export class QuoteDisplayComponent implements OnInit {
  quote: any;
  error: string | null = null;

  constructor(private quotesService: QuotesService) { }

  ngOnInit(): void {
    this.fetchQuote();
  }

  fetchQuote(): void {
    this.quotesService.getRandomQuote().subscribe({
      next: (data) => {
        this.quote = data;
        this.error = null;
      },
      error: (err) => {
        console.error('Error fetching quote:', err);
        this.error = 'Failed to fetch quote.';
      }
    });
  }
}
