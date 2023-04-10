import docxtemplater from 'docxtemplater'
import PizZip from 'pizzip'
import JSZipUtils from 'jszip-utils'
import { saveAs } from 'file-saver'
 
//word文件生成
export default {
  data() {
       return {}
  },
  methods: {
    exportWord(docxsrc, docxname, fullData){
        this.action(docxsrc, docxname, fullData);
    },
    //模板文件的位置 docxsrc
    //导出文件的名字 docxname
    //数据填充对象 fullData
    action(docxsrc, docxname, fullData) {
        // 读取并获得模板文件的二进制内容
        JSZipUtils.getBinaryContent(docxsrc, function(error, content) {
          if (error) {
            throw error;
          }
          let zip = new PizZip(content);
          let doc = new docxtemplater().loadZip(zip);
          doc.setOptions({nullGetter: function() { return ""; }});
          // 设置模板变量的值
          doc.setData(fullData);
          try {
            doc.render();
          } catch (error) {
            let e = {
              message: error.message,
              name: error.name,
              stack: error.stack,
              properties: error.properties
            };
            console.log(JSON.stringify({ error: e }));
            throw error;
          }
          // 生成一个代表docxtemplater对象的zip文件（不是一个真实的文件，而是在内存中的表示）
          let out = doc.getZip().generate({
            type: "blob",
            mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          });
          // 将目标文件对象保存为目标类型的文件，并命名
          saveAs(out, docxname+".docx");
        });
      }
  }
}