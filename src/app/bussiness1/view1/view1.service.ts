import { Injectable } from '@angular/core';
import { ODataService, ODataResponse, ODataQuery, EntitySet, FilterComparison, OperatorComparison } from 'odata-v4-ng';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/take';


import { ConfigService } from 'app/core/services';

@Injectable()
export class View1Service {

  constructor(
    private odataService: ODataService,
    private config: ConfigService
  ) { }

  public getAll(): Observable<EntitySet<Manufacturer>> {
    const query = new ODataQuery(this.odataService, 'http://localhost:8666/OdataService.svc/')
      .entitySet('VerificationActionEntitys');

    return query.get()
      .map((res: ODataResponse) => {
        return res.toEntitySet();
      });
  }

  public getById(id: string): Observable<Manufacturer> {
    const query = new ODataQuery(this.odataService, this.config.instant('odataUrl'))
      .entitySet('Manufacturers')
      .entityKey(id);

    return query.get()
      .map((res: ODataResponse) => {
        return res.toEntity<Manufacturer>();
      });
  }

  public test(): Observable<number> {
    return Observable.interval(500).take(50);
  }
}

export interface Manufacturer {
  Id: string;
  Name: string;
}
