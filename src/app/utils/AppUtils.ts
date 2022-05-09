export default class AppUtils{

  public static nullPropsRemover(obj: any): any {
    // return Object.fromEntries(
    //     Object.entries(obj)
    //         .filter(([_, v]) => v != null)
    //         .map(([k, v]) => [k, v === Object(v) ? AppUtils.nullPropsRemover(v) : v])
    // );
    if (Array.isArray(obj)) {
        return obj
            .map(v => (v && typeof v === 'object') ? obj instanceof Date ? (obj as Date).toISOString() : AppUtils.nullPropsRemover(v) : v)
            .filter(v => !(v == null));
    } else {
        if (obj instanceof Date) {
            return (obj as Date).toISOString();
        }
        return Object.entries(obj)
            .map(([k, v]) => {
              // console.log("Removing null for: " + k + " : " + v);
              // console.log(v!=='')
              // console.log(v!=="")
              return [k, v && typeof v === 'object' ? AppUtils.nullPropsRemover(v) : v];
            })
            .reduce((a:any, [k, v]) => (v == null || v === '' || v === "" ? a : (a[k]=v, a)), {});
    }
}
}
