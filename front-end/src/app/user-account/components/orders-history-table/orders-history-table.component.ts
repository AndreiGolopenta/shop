import { Component, Input, ViewChild, OnChanges } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/models/order.interface';

@Component({
  selector: 'app-orders-history-table',
  templateUrl: './orders-history-table.component.html',
  styleUrls: ['./orders-history-table.component.scss']
})
export class OrdersHistoryTableComponent implements OnChanges {
  @Input() orders: Order[];

  displayedColumns: string[] = ['date', 'products', 'amount'];
  dataSource: MatTableDataSource<Order>;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  ngOnChanges() {
    if (this.orders) {
      this.dataSource = new MatTableDataSource<Order>(this.orders);
      this.dataSource.paginator = this.paginator;
    }
  }
}
