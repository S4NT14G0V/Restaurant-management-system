package com.api.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.api.backend.model.InvoiceModel;
import com.api.backend.services.InvoiceService;

@RestController
@RequestMapping("/invoice")
public class InvoiceControl {

    @Autowired
    private InvoiceService invoiceService;

    @GetMapping("/getAll")
    public List<InvoiceModel> obtainInvoiceList() {
        return invoiceService.obtainInvoiceList();
    }

    @PostMapping("/create")
    public InvoiceModel createInvoice(@RequestBody InvoiceModel invoice) {
        return invoiceService.createInvoice(invoice);
    }

    @PutMapping("/edit/{id}")
    public InvoiceModel updateInvoice(@PathVariable int id, @RequestBody InvoiceModel invoice) {
        invoice.setId(id);
        return invoiceService.updateInvoice(invoice);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteInvoice(@PathVariable int id) {
        invoiceService.deleteInvoice(id);
    }
}
