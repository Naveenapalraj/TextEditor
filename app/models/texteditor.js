import Model,{attr,belongsTo} from '@ember-data/model';

export default class TexteditorModel extends Model {
  @belongsTo('user') user;
  @attr('string') name;
  @attr bodyContent;
  @attr('number') userId;
}
